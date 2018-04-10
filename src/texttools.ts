/*
 * Created by Tim Mend 
 * This file will provide function for editing texts
 * src: https://stackoverflow.com/questions/15604140/replace-multiple-strings-with-multiple-other-strings
 * 
 */
export class Texttools
{
    private replace_words: string[] =
        [
            "einfach",
            "\\sa\\s",
            "ab               ",
            "aber             ",
            "ach              ",
            "acht             ",
            "achte            ",
            "achten           ",
            "achter           ",
            "achtes           ",
            "ag               ",
            "alle             ",
            "allein           ",
            "allem            ",
            "allen            ",
            "aller            ",
            "allerdings       ",
            "alles            ",
            "allgemeinen      ",
            "als              ",
            "also             ",
            "am               ",
            "an               ",
            "ander            ",
            "andere           ",
            "anderem          ",
            "anderen          ",
            "anderer          ",
            "anderes          ",
            "anderm           ",
            "andern           ",
            "anderr           ",
            "anders           ",
            "au               ",
            "auch             ",
            "auf              ",
            "aus              ",
            "ausser           ",
            "ausserdem        ",
            "außer            ",
            "außerdem         ",
            "\\sb\\s                ",
            "bald             ",
            "bei              ",
            "beide            ",
            "beiden           ",
            "beim             ",
            "beispiel         ",
            "bekannt          ",
            "bereits          ",
            "besonders        ",
            "besser           ",
            "besten           ",
            "bin              ",
            "bis              ",
            "bisher           ",
            "bist             ",
            "\\sc\\s                ",
            "\\sd\\s                ",
            "d.h              ",
            "da               ",
            "dabei            ",
            "dadurch          ",
            "dafür            ",
            "dagegen          ",
            "daher            ",
            "dahin            ",
            "dahinter         ",
            "damals           ",
            "damit            ",
            "danach           ",
            "daneben          ",
            "dank             ",
            "dann             ",
            "daran            ",
            "darauf           ",
            "daraus           ",
            "darf             ",
            "darfst           ",
            "darin            ",
            "darum            ",
            "darunter         ",
            "darüber          ",
            "das              ",
            "dasein           ",
            "daselbst         ",
            "dass             ",
            "dasselbe         ",
            "davon            ",
            "davor            ",
            "dazu             ",
            "dazwischen       ",
            "daß              ",
            "dein             ",
            "deine            ",
            "deinem           ",
            "deinen           ",
            "deiner           ",
            "deines           ",
            "dem              ",
            "dementsprechend  ",
            "demgegenüber     ",
            "demgemäss        ",
            "demgemäß         ",
            "demselben        ",
            "demzufolge       ",
            "den              ",
            "denen            ",
            "denn             ",
            "denselben        ",
            "der              ",
            "deren            ",
            "derer            ",
            "derjenige        ",
            "derjenigen       ",
            "dermassen        ",
            "dermaßen         ",
            "derselbe         ",
            "derselben        ",
            "des              ",
            "deshalb          ",
            "desselben        ",
            "dessen           ",
            "deswegen         ",
            "dich             ",
            "die              ",
            "diejenige        ",
            "diejenigen       ",
            "dies             ",
            "diese            ",
            "dieselbe         ",
            "dieselben        ",
            "diesem           ",
            "diesen           ",
            "dieser           ",
            "dieses           ",
            "dir              ",
            "doch             ",
            "dort             ",
            "drei             ",
            "drin             ",
            "dritte           ",
            "dritten          ",
            "dritter          ",
            "drittes          ",
            "du               ",
            "durch            ",
            "durchaus         ",
            "durfte           ",
            "durften          ",
            "dürfen           ",
            "dürft            ",
            "\\se\\s                ",
            "eben             ",
            "ebenso           ",
            "ehrlich          ",
            "ei               ",
            "ei,              ",
            "        eigen    ",
            "eigene           ",
            "eigenen          ",
            "eigener          ",
            "eigenes          ",
            "ein              ",
            "einander         ",
            "eine             ",
            "einem            ",
            "einen            ",
            "einer            ",
            "eines            ",
            "einig            ",
            "einige           ",
            "einigem          ",
            "einigen          ",
            "einiger          ",
            "einiges          ",
            "einmal           ",
            "eins             ",
            "elf              ",
            "en               ",
            "ende             ",
            "endlich          ",
            "entweder         ",
            "er               ",
            "ernst            ",
            "erst             ",
            "erste            ",
            "ersten           ",
            "erster           ",
            "erstes           ",
            "es               ",
            "etwa             ",
            "etwas            ",
            "euch             ",
            "euer             ",
            "eure             ",
            "eurem            ",
            "euren            ",
            "eurer            ",
            "eures            ",
            "\\sf\\s                ",
            "folgende         ",
            "früher           ",
            "fünf             ",
            "fünfte           ",
            "fünften          ",
            "fünfter          ",
            "fünftes          ",
            "für              ",
            "\\sg\\s                ",
            "gab              ",
            "ganz             ",
            "ganze            ",
            "ganzen           ",
            "ganzer           ",
            "ganzes           ",
            "gar              ",
            "gedurft          ",
            "gegen            ",
            "gegenüber        ",
            "gehabt           ",
            "gehen            ",
            "geht             ",
            "gekannt          ",
            "gekonnt          ",
            "gemacht          ",
            "gemocht          ",
            "gemusst          ",
            "genug            ",
            "gerade           ",
            "gern             ",
            "gesagt           ",
            "geschweige       ",
            "gewesen          ",
            "gewollt          ",
            "geworden         ",
            "gibt             ",
            "ging             ",
            "gleich           ",
            "gott             ",
            "gross            ",
            "grosse           ",
            "grossen          ",
            "grosser          ",
            "grosses          ",
            "groß             ",
            "große            ",
            "großen           ",
            "großer           ",
            "großes           ",
            "gut              ",
            "gute             ",
            "guter            ",
            "gutes            ",
            "\\sh\\s                ",
            "hab              ",
            "habe             ",
            "haben            ",
            "habt             ",
            "hast             ",
            "hat              ",
            "hatte            ",
            "hatten           ",
            "hattest          ",
            "hattet           ",
            "heisst           ",
            "her              ",
            "heute            ",
            "hier             ",
            "hin              ",
            "hinter           ",
            "hoch             ",
            "hätte            ",
            "hätten           ",
            "\\si\\s                ",
            "ich              ",
            "ihm              ",
            "ihn              ",
            "ihnen            ",
            "ihr              ",
            "ihre             ",
            "ihrem            ",
            "ihren            ",
            "ihrer            ",
            "ihres            ",
            "im               ",
            "immer            ",
            "in               ",
            "            indem",
            "infolgedessen    ",
            "ins              ",
            "irgend           ",
            "ist              ",
            "\\sj\\s                ",
            "ja               ",
            "jahr             ",
            "jahre            ",
            "jahren           ",
            "je               ",
            "jede             ",
            "jedem            ",
            "jeden            ",
            "jeder            ",
            "jedermann        ",
            "jedermanns       ",
            "jedes            ",
            "jedoch           ",
            "jemand           ",
            "jemandem         ",
            "jemanden         ",
            "jene             ",
            "jenem            ",
            "jenen            ",
            "jener            ",
            "jenes            ",
            "jetzt            ",
            "\\sk\\s                ",
            "kam              ",
            "kann             ",
            "kannst           ",
            "kaum             ",
            "kein             ",
            "keine            ",
            "keinem           ",
            "keinen           ",
            "keiner           ",
            "keines           ",
            "kleine           ",
            "kleinen          ",
            "kleiner          ",
            "kleines          ",
            "kommen           ",
            "kommt            ",
            "konnte           ",
            "konnten          ",
            "kurz             ",
            "können           ",
            "könnt            ",
            "könnte           ",
            "\\sl\\s                ",
            "lang             ",
            "lange            ",
            "leicht           ",
            "leide            ",
            "lieber           ",
            "los              ",
            "\\sm\\s                ",
            "machen           ",
            "macht            ",
            "machte           ",
            "mag              ",
            "magst            ",
            "mahn             ",
            "mal              ",
            "man              ",
            "manche           ",
            "manchem          ",
            "manchen          ",
            "mancher          ",
            "manches          ",
            "mann             ",
            "mehr             ",
            "mein             ",
            "meine            ",
            "meinem           ",
            "meinen           ",
            "meiner           ",
            "meines           ",
            "mensch           ",
            "menschen         ",
            "mich             ",
            "mir              ",
            "mit              ",
            "mittel           ",
            "mochte           ",
            "mochten          ",
            "morgen           ",
            "muss             ",
            "musst            ",
            "musste           ",
            "mussten          ",
            "muß              ",
            "mußt             ",
            "möchte           ",
            "mögen            ",
            "möglich          ",
            "mögt             ",
            "müssen           ",
            "müsst            ",
            "müßt             ",
            "\\sn\\s                ",
            "na               ",
            "nach             ",
            "nachdem          ",
            "nahm             ",
            "natürlich        ",
            "neben            ",
            "nein             ",
            "neue             ",
            "neuen            ",
            "neun             ",
            "neunte           ",
            "neunten          ",
            "neunter          ",
            "neuntes          ",
            "nicht            ",
            "nichts           ",
            "nie              ",
            "niemand          ",
            "niemandem        ",
            "niemanden        ",
            "noch             ",
            "nun              ",
            "nur              ",
            "\\so\\s                ",
            "ob               ",
            "oben             ",
            "oder             ",
            "offen            ",
            "oft              ",
            "ohne             ",
            "ordnung          ",
            "\\sp\\s                ",
            "\\sq\\s                ",
            "\\sr\\s                ",
            "recht            ",
            "rechte           ",
            "rechten          ",
            "rechter          ",
            "rechtes          ",
            "richtig          ",
            "rund             ",
            "\\ss\\s                ",
            "sa               ",
            "sache            ",
            "sagt             ",
            "sagte            ",
            "sah              ",
            "satt             ",
            "schlecht         ",
            "schluss          ",
            "schon            ",
            "sechs            ",
            "sechste          ",
            "sechsten         ",
            "sechster         ",
            "sechstes         ",
            "sehr             ",
            "sei              ",
            "seid             ",
            "seien            ",
            "sein             ",
            "seine            ",
            "seinem           ",
            "seinen           ",
            "seiner           ",
            "seines           ",
            "seit             ",
            "seitdem          ",
            "selbst           ",
            "sich             ",
            "sie              ",
            "sieben           ",
            "siebente         ",
            "siebenten        ",
            "siebenter        ",
            "siebentes        ",
            "sind             ",
            "so               ",
            "solang           ",
            "solche           ",
            "solchem          ",
            "solchen          ",
            "solcher          ",
            "solches          ",
            "soll             ",
            "sollen           ",
            "sollst           ",
            "sollt            ",
            "sollte           ",
            "sollten          ",
            "sondern          ",
            "sonst            ",
            "soweit           ",
            "sowie            ",
            "später           ",
            "startseite       ",
            "statt            ",
            "steht            ",
            "suche            ",
            "\\st\\s                ",
            "tag              ",
            "tage             ",
            "tagen            ",
            "tat              ",
            "teil             ",
            "tel              ",
            "tritt            ",
            "trotzdem         ",
            "tun              ",
            "\\su\\s                ",
            "uhr              ",
            "um               ",
            "und              ",
            "und ?            ",
            "uns              ",
            "unse             ",
            "unsem            ",
            "unsen            ",
            "unser            ",
            "unsere           ",
            "unserer          ",
            "unses            ",
            "unter            ",
            "\\sv\\s                ",
            "vergangenen      ",
            "viel             ",
            "viele            ",
            "vielem           ",
            "vielen           ",
            "vielleicht       ",
            "vier             ",
            "vierte           ",
            "vierten          ",
            "vierter          ",
            "viertes          ",
            "vom              ",
            "von              ",
            "vor              ",
            "\\sw\\s                ",
            "wahr             ",
            "wann             ",
            "war              ",
            "waren            ",
            "warst            ",
            "wart             ",
            "warum            ",
            "was              ",
            "weg              ",
            "wegen            ",
            "weil             ",
            "weit             ",
            "weiter           ",
            "weitere          ",
            "weiteren         ",
            "weiteres         ",
            "welche           ",
            "welchem          ",
            "welchen          ",
            "welcher          ",
            "welches          ",
            "wem              ",
            "wen              ",
            "wenig            ",
            "wenige           ",
            "weniger          ",
            "weniges          ",
            "wenigstens       ",
            "wenn             ",
            "wer              ",
            "werde            ",
            "werden           ",
            "werdet           ",
            "weshalb          ",
            "wessen           ",
            "wie              ",
            "wieder           ",
            "wieso            ",
            "will             ",
            "willst           ",
            "wir              ",
            "wird             ",
            "wirklich         ",
            "wirst            ",
            "wissen           ",
            "wo               ",
            "woher            ",
            "wohin            ",
            "wohl             ",
            "wollen           ",
            "wollt            ",
            "wollte           ",
            "wollten          ",
            "worden           ",
            "wurde            ",
            "wurden           ",
            "während          ",
            "währenddem       ",
            "währenddessen    ",
            "wäre     ",
            "würde    ",
            "würden   ",
            "\\sx\\s        ",
            "\\sy\\s        ",
            "\\sz\\s        ",
            "z.b      ",
            "zehn     ",
            "zehnte   ",
            "zehnten  ",
            "zehnter  ",
            "zehntes  ",
            "zeit     ",
            "zu       ",
            "zuerst   ",
            "zugleich ",
            "zum      ",
            "zunächst ",
            "zur      ",
            "zurück   ",
            "zusammen ",
            "zwanzig  ",
            "zwar     ",
            "zwei     ",
            "zweite   ",
            "zweiten",
            "zweiter",
            "zweites",
            "zwischen",
            "zwölf",
            "über",
            "überhaupt",
            "übrigens",
            "ne",
            "eigentlich",
        ];

    private replace_2: string[] = [
        "[?,.:\\-!\"&\\(\\)\\€\\;\\'\\<\\>\\/\\%\\~\\+\\-\\*\\@\\=\\{\\}\\`\\´\\§\\$\\|\\°\\^]",
        "[^A-Za-z0-9\\s\\nöäüÄÖÜß]",
        "(#[^\\s]*)+",
        "[0-9]"
    ];
    private replace_words_clean: string[] = [];

    private keywords: any;
    private fs: any;

    constructor()
    {
        this.fs = require('fs');
    }

    /**
     * 
     * This will clean the stopwords from spaces
     */
    private cleanWords()
    {
        return new Promise((resolve, reject) =>
        {
            for (let i = 0; i < this.replace_words.length; i++)
            {
                this.replace_words_clean.push(this.replace_words[i].trim());
            }
            resolve(true);
        })
            
       
    }

    /**
     * This will replace all stop words, smileys, hashtags and other special characters
     * 
     * @param str string of text
     */
    private async replaceAll(str)
    {
        return new Promise((resolve, reject) =>
        {
            let re = new RegExp(Object.values(this.replace_words_clean).join("\\b|\\b") + "|" + Object.values(this.replace_2).join("|"), "gi");
            resolve(str.replace(re, function (matched)
            {
                return "";
            }))
        })

    }

    public async extractHashtags(str)
    {
        return new Promise((resolve, reject) =>
        {
            let re = new RegExp(/(#[^\s]*)+/, "gi");
            resolve(str.match(re, (matched) =>
            {
                return matched;
            }))
        })
    }

    /**
     * Load the Keywords out of the arraywords.txt file.
     */
    private loadKeywords()
    {
        return new Promise((resolve, reject) =>
        {
        let keywords_n = [];
        this.fs.readFile('../src/SupportingFiles/arraywords.txt', 'utf8', (err, data) =>
        {

            
                if (err) console.log(err);
                let wordsArray = data.split("\n");
                //console.log(wordsArray);
                for (let key in wordsArray)
                {
                    let tmp = wordsArray[key].split(/\s+/);
                    keywords_n.push({ name: tmp[0], amount: tmp[1] });
                }
                //console.log(keywords_n);
                return resolve(keywords_n);
            
           
            });
        })

    }

    /**
     * This will extract a keywords from a given message. 
     * @param message string 
     */
    public async extractKeywords(message: string)
    {
        this.keywords = await this.loadKeywords();
        await this.cleanWords();
        let res: any[] = [];
        let words = await this.replaceAll(message);
        let words_array = this.splitByWords(words);
        return new Promise((resolve, reject) =>
        {
            for (let i = 0; i < words_array.length; i++)
            {
                for (let key in this.keywords)
                {
                    if (this.keywords[key].name == words_array[i])
                    {
                        res.push(this.keywords[key]);
                    }
                }
            }
            resolve(res);
        })


    }


    /**
     * this will split a text at spaces
     * @param text string of text
     */
    private splitByWords(text)
    {
        let wordsArray: any;
        try
        {

            wordsArray = text.split(/\s+/);

        } catch (e)
        {

            console.log(e);
        }
        return wordsArray;
    }



}

