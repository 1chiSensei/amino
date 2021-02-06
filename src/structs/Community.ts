import { GenericObject } from "../api/RequestBuilder";
import { BaseClient } from "../client/BaseClient";

export class Community {
    constructor(public client: BaseClient, data: GenericObject) {
        Object.assign(this, data)
    }
}


/* START OF TYPINGS */

export interface Community {
    userAddedTopicList: UserAddedTopicList[];
    searchable: boolean;
    agent: Agent;
    listedStatus: number;
    probationStatus: number;
    keywords: string;
    themePack: ThemePack;
    membersCount: number;
    primaryLanguage: string;
    communityHeat: number;
    mediaList: any[][];
    content: string;
    strategyInfo: string;
    tagline: string;
    joinType: number;
    status: number;
    modifiedTime: Date;
    ndcId: number;
    activeInfo: ActiveInfo;
    link: string;
    icon: string;
    endpoint: string;
    name: string;
    extensions: Extensions;
    templateId: number;
    createdTime: Date;
    promotionalMediaList: any[][];
}

export interface Style {
    backgroundColor: string;
}

export interface UserAddedTopicList {
    topicId: number;
    style: Style;
    name: string;
}

export interface Agent {
    status: number;
    isNicknameVerified: boolean;
    uid: string;
    level: number;
    followingStatus: number;
    accountMembershipStatus: number;
    isGlobal: boolean;
    membershipStatus: number;
    reputation: number;
    role: number;
    ndcId: number;
    membersCount: number;
    nickname: string;
    icon: string;
}

export interface ThemePack {
    themeColor: string;
    themePackHash: string;
    themePackRevision: number;
    themePackUrl: string;
}

export interface ActiveInfo {
}

export interface Extensions {
    iTagIdList: number[];
}