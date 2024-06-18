/** 登录信息 */
export interface AuthLoginInput {
    /**
     * 账号
     * @minLength 1
     */
    userName: string
    /**
     * 密码
     * @minLength 1
     */
    password: string
    /** 密码键 */
    passwordKey?: string | null
    /** 验证码Id */
    captchaId?: string | null
    /** 验证码数据 */
    captchaData?: string | null
    openId?: string | null
    /** UnionId */
    unionId?: string | null
  }

// 登录响应模型
export interface QRKeyRes {
    code: number
    data: {
        code: number
        unikey: string
    }
}

export interface QRImgRes {
    code: number
    data: {
        qrimg: string
        qrurl: string
    }
}

export interface CheckQRRes {
    code: number
    cookie: string
    message: string
}

export interface LoginStatus {
    data: {
        code: number
        account: {
            id: number
            userName: string
            createTime: number
        }
        profile: {
            userId: number
            nickname: string
            avatarUrl: string
        } | null
    }
}
