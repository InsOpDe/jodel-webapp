import * as mysql from 'promise-mysql';
import { Texttools } from './texttools';
import { MostSimilar, Keywords } from './resultinterfaces'
import { equal } from 'assert';
export class Db{

    private pool:mysql.Pool;
    private texttools: Texttools;
    /**
     * Constructor für die DB Klasse
     *
     * @param {string} host
     * @param {string} user
     * @param {string} password
     * @param {string} database
     * @param {number} port
     */
    constructor(host:string, user:string,password:string, database:string, port:number) {

        this.pool = mysql.createPool({
            host : host,
            user : user,
            password : password,
            database : database,
            port : port,
        });
        this.texttools = new Texttools();
    }



    /**
     *
     * @returns {Promise<any>}
     */
    public async testQuery(){
        return await this.query("SELECT * from children Limit 1");
    }


    /**
     * get random top 1000 post
     *
     * @returns {Promise<any>}
     */
    public async getRandomPost(){
        return await this.query("SELECT top.*, messages.post_message FROM (SELECT * FROM jodeldb.posts order by votes desc LIMIT 1000) as top \n" +
            "inner join messages on (messages.post_id = top.post_id)\n" +
            "order by RAND() LIMIT 1\n");
    }


    /**
     * This Function will return a result if at least one keyword exists in the table keywords!
     * The table keywords is very big, so this function is very slow.
     *
     * @param keywords words from the jodelmessage which will be searched in the table keywords for
     */
    public async getPostsFromKeywords(keywords: string[])
    {
        let res: any;
        let _query = "SELECT t.post_id FROM keywords t WHERE post_keyword IN (";
        for (let i = 0; i < keywords.length; i++)
        {
            if (i == keywords.length - 1)
            {
                _query += "\"" + keywords[i] + "\"" + ")";
            }
            else
            {
                _query += "\"" + keywords[i] + "\"" + ",";
            }
        }

        let count = keywords.length;
        do
        {
            if (count == 0)
            {
                return [];
            }
            let _query_1 = _query + " GROUP BY t.post_id HAVING COUNT(DISTINCT t.post_keyword) = " + count;
            res = await this.query(_query_1);
            count--;
            process.stdout.write(".");
        }
        while (res.length == 0)

        return res;
    }

    public timeKeywords(keywords: string)
    {
        for (let i = 0; i < 25; i++)
        {
            let _query = "SELECT post_id FROM posts WHERE created_at LIKE \"%T" + i + ":%\"";
            let query_res = this.query(_query);
            for (let key in query_res)
            {
                this.getKeywordsById(query_res[key]);
            }
            //this.getKeywordsById()

        }
    }


    /**
     * Same Function as getPostsFromKeywords
     * @param tags the tags which will be searched in the table tags
     */
    public async getPostsFromTags(tags: string[])
    {
        let res: any;
        let _query = "SELECT t.post_id FROM tags t WHERE post_tag IN (";
        for (let i = 0; i < tags.length; i++)
        {
            if (i == tags.length - 1)
            {
                _query += "\"" + tags[i] + "\"" + ")";
            }
            else
            {
                _query += "\"" + tags[i] + "\"" + ",";
            }
        }

        let count = tags.length;
        do
        {
            if (count == 0)
            {

                return res;
            }
            let _query_1 = _query + " GROUP BY t.post_id HAVING COUNT(DISTINCT t.post_tag) = " + count;
            res = await this.query(_query_1);
            count--;
            process.stdout.write(".");
        }
        while (res.length == 0)

        return res;
    }

    public async getSimiliarKeywords(keyword: string)
    {
        let _query = "SELECT "
                   +"    keywords2.post_keyword,                                                 "
                   +"    AVG(posts.votes) as votes                                                      "
                   +"  FROM                                                                      "
                   +"    (SELECT                                                                 "
                   +"        *                                                                   "
                   +"     FROM                                                                   "
                   +"        keywords                                                            "
                   +"    WHERE                                                                   "
                   +"        LCASE(post_keyword) = LCASE(" + "\"" + keyword + "\"" + ")          "
                   +"    LIMIT  10) keywords                                                      "
                   +"    INNER JOIN posts ON(posts.post_id = keywords.post_id)                   "
                   +"    INNER JOIN keywords as keywords2 ON(posts.post_id = keywords2.post_id)  "
            + "    GROUP BY keywords2.post_keyword                                         "
        return this.query(_query);
    }

    public async getSimiliarHashtags(hashtag: string)
    {
        let _query = "SELECT "
  +"      hashtags.post_tag as hashtag,                                             "
  +"          AVG(posts.votes) as votes                                             "
  +"      FROM                                                                      "
  +"          (SELECT                                                               "
  +"          *                                                                     "
  +"          FROM                                                                  "
  +"      keywords                                                                  "
  +"  WHERE                                                                         "
  +"      LCASE(post_keyword) = LCASE(" + "\"" + hashtag + "\"" + ")                                       "
  +"  LIMIT 10) keyword                                                             "
  +"      INNER JOIN posts ON(posts.post_id = keyword.post_id)                      "
  +"      INNER JOIN tags as hashtags ON(posts.post_id = hashtags.post_id)          "
  +"      GROUP BY hashtags.post_tag"                                               
        return this.query(_query);


    }



    /**
     * This will give back the Most Similiar Post. First of all this function will search for Posts
     * with similiar Keyword and Hashtags. Then the function will check if there are posts with 
     * the same ids in the Keywords and Hashtags Result and will return them in a array of string 
     * and also returns the keywords and hashtag posts
     * correct other functions
     * @param message string
     * @returns Promise<MostSimiliar> resulttype is in resultinterfaces
     */
    public async getMostSimiliar(message: string): Promise<MostSimilar>
    {

        let res: string[] = await this.texttools.extractHashtags(message);

        //handel case if there is no keyword in the message
        if (res == undefined)
        {
            res = [];
        }

        //TODO:
        //Speeding up ---- Maybe remove this when better database exists
        while (res.length > 3)
        {
            res.pop();
        }

        let hashtagPosts = await this.getPostsFromTags(res);

        //handel case if there is no hashtag in the message
        if (hashtagPosts == undefined)
        {
            hashtagPosts = []
        }

        let keywords: Keywords[] = await this.texttools.extractKeywords(message);
        let keywords_name: string[] = keywords.map(resultset => resultset.name);

        //TODO:
        //Speeding up -- Maybe remove this when better database exists
        while (keywords_name.length > 3)
        {
            keywords_name.pop();
        }

        //handel case if there is no keyword AND no hashtag in the message
        if (keywords_name.length == 0 && res.length == 0)
        {
            return new Promise<MostSimilar>((resolve) =>
            {
                resolve({
                    MostSimiliar: [],
                    KeyWordPosts: [],
                    HashtagPosts: []
                });
            });
        }


        let resDBKeyword = await this.getPostsFromKeywords(keywords_name);
        
        return new Promise<MostSimilar>((resolve, reject) =>
        {

            let equal_key: string[] = [];

        for (let key in resDBKeyword)
        {
            for (let key2 in hashtagPosts)
            {
                if (resDBKeyword[key].post_id == hashtagPosts[key2].post_id)
                {
                    equal_key.push(resDBKeyword[key].post_id);
                }
            }
            }

            resolve({
                MostSimiliar: equal_key,
                KeyWordPosts: resDBKeyword.map(resultset => resultset.post_id),
                HashtagPosts: hashtagPosts.map(resultset => resultset.post_id)
            })
        })

        }




    //TODO: SLOW - Write better SQL?
    /**
     * 
     * This will retrieve how many times a specific keyword was used in a city
     * @param keyword the keyword which will be searched for
     */
    public async getCityKeywordAmount(keyword: string)
    {
        
        let _query = "SELECT cities.id_cities, cities.name, result.amount " 
                      + "FROM cities as cities"
                      + " INNER JOIN "
                      + "(SELECT " 
                      + "COUNT(g1.loc_name) AS amount, "
                      +     "g1.post_keyword,"
                      +     " g1.loc_name"
                      +" FROM                                         "
                      +" (SELECT                                      "
                      +"    t1.post_id, t1.loc_name, t2.post_keyword "
                      +" FROM                                         "
                      +"    location t1                              "
                      +" INNER JOIN                                   "
                      +"    keywords t2 ON t1.post_id = t2.post_id   "
                      +" WHERE                                        "
                      +"    post_keyword = " + "\"" + keyword + "\"" + ") g1"
                      +" GROUP BY                                     "
                      +"    g1.post_keyword, g1.loc_name) result     "
                      +" ON                                           "
                      +"    cities.name = result.loc_name            "
        return await this.query(_query);

    }


    //TODO: SLOW - Write better SQL?
    /**
     * 
     * This will retrieve how many times a specific hashtag was used in a city
     * @param hashtag the hashtag which will be searched for
     */
    public async getCityHashtagAmount(hashtag: string)
    {

        let _query = "SELECT cities.id_cities, cities.name, result.amount "
                     +"  FROM cities as cities                               "
                     +"  INNER JOIN                                          "
                     +"  (SELECT                                             "
                     +"  COUNT(g1.loc_name) AS amount,                       "
                     +"  g1.post_tag,                                        "
                     +"  g1.loc_name                                         "
                     +"  FROM                                                "
                     +"  (SELECT                                             "
                     +"  t1.post_id, t1.loc_name, t2.post_tag                "
                     +"  FROM                                                "
                     +"  location t1                                         "
                     +"  INNER JOIN tags t2 ON t1.post_id = t2.post_id       "
                     +"  WHERE                                               "
                     +"  post_tag = " + "\"" + hashtag + "\"" + ") g1        "
                     +"  GROUP BY g1.post_tag, g1.loc_name) result           "
                     +"  ON cities.name = result.loc_name                    "
        return await this.query(_query);

    }

    public async getClockVotesAmount(keyword: string[])
    {
        let _query ="SELECT                                                     "
                    +"    AVG(posts.votes) as votes,                            "
                    +"    SUBSTR(posts.created_at, 12, 2) as hour               "
                    +"    FROM                                                  "
                    +"    (SELECT                                               "
                    +"    keywords.post_keyword as pk2,                         "
                    +"    keywords.post_id                                      "
                    +"    FROM                                                  "
			        +"    keywords                                              "
		            +"    WHERE                                                 "
                    +"LCASE(keywords.post_keyword) IN(" + "\"" + keyword.join("\",\"") + "\"" + ")                    "
                    +" LIMIT 100) keywords3                                     "
                    +"    INNER JOIN posts ON(posts.post_id = keywords3.post_id)"
                    +"    GROUP BY hour "
            + "    order by hour asc "

        return this.query(_query);
    }




    public async getHashtagAmount(hashtag: string)
    {
        let _query = "SELECT COUNT(post_tag) as amount, post_tag from tags WHERE post_tag =  " + "\"" + hashtag + "\"";
        return await this.query(_query);
    }

    public async getHashtagsById(id: string)
    {
        let _query = "Select post_tag FROM tags WHERE post_id = " + "\"" + id + "\"";
        return await this.query(_query);
    }

    public async getMessageById(id: string)
    {
        let _query = "SELECT post_message from messages WHERE post_id = " + "\"" + id + "\"";
        return await this.query(_query);
    }

    public async getTagsById(id: string)
    {
        let _query = "Select post_tag from tags WHERE post_id = " + "\"" + id + "\"";
        return await this.query(_query);
    }

    public async getKeywordsById(id: string)
    {
        let _query = "Select post_keyword from keywords WHERE post_id = " + "\"" + id + "\"";
        return await this.query(_query);
    }

    public async getLocationById(id: string)
    {
        let _query = "Select loc_name from location WHERE post_id = " + "\"" + id + "\"";
        return await this.query(_query);
    }

    public async getLocationByIdChild(id: string)
    {
        let _query = "Select post_id from children WHERE child_id = " + "\"" + id + "\"";
        let tmp = await this.query(_query);
        _query = "Select loc_name from location WHERE post_id = " + "\"" + tmp[0].post_id + "\"";
        return await this.query(_query);
    }

    public async getCreatedByIdChild(id: string)
    {
        let _query = "Select post_id from children WHERE child_id = " + "\"" + id + "\""
        let tmp = await this.query(_query);
        _query = "Select created_at from posts WHERE post_id = " + "\"" + tmp[0].post_id + "\"";
        return await this.query(_query);
    }

    public async getChildById(id: string)
    {
        let _query = "Select * from children WHERE child_id = " + "\"" + id + "\"";
        return await this.query(_query);
    }

    /**
     * This function will return a dataset from posts
     * @param id the id which should be searched for in the table Posts
     */
    public async getPostById(id: string)
    {
        let _query = "SELECT * from posts WHERE post_id = " + "\"" + id + "\"";
        return await this.query(_query);
    }

    public async getChildrenById(id: string)
    {
        let _query = "SELECT * from children WHERE post_id = " + "\"" + id + "\"";
        return await this.query(_query);
    }

    /**
     *
     * @param {string} qry
     * @returns {Promise<any>}
     */
    private async query (qry:string) {
        try {
            return await this.pool.query(qry);
        } catch(err) {
            console.log(err);
        }

    }



}