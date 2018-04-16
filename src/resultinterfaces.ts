export interface Citydata
{
    name: string,
    votes: number,
    id_cities: number
}

export interface HashandKeyResult
{
    name: string,
    amount: number,
    maxValue: number,
    citydata: Citydata[],
    similiar: any[],
    color: string
}

export interface keyorhash
{
    name: string,
    value: number,
    color: string,
    maxValue: number
}

export interface interpolatedResult
{
    Votes: number,
    Comments: number,
    Pins: number,
    maxValue: number,
    maxKommentare: number,
    Keywords_similiar: keyorhash[],
    Hashtag_similiar: keyorhash[]
}

export interface JodelJSON
{
    core: coreJodelJSON;
    image_approved: Boolean;
    image_url: string;
    child_count: Number;
    oj_replied: Boolean;
    children: coreJodelJSON[];
}

export interface coreJodelJSON
{
    post_id: string;
    vote_count: Number;
    post_color: string;
    post_message: string;
    keywords: string[];
    tags: string[];
    location: string;
    created_at: string;

}
export interface JRESULT
{
    message: string;
    interPolatedResult: interpolatedResult;
    time: any;
    hashtags: HashandKeyResult[],
    keywords: HashandKeyResult[],
    jodel: JodelJSON;
    cityimportance: Citydata[];

}