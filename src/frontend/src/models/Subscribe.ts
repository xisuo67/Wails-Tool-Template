/** 订阅vip返回实体信息 */
export interface SubscribeTypeOutput {
    /**
     * 订阅类型id
     * @format int64
     */
    id?: number
    /** 订阅类型名称 */
    name?: string | null
    /** 订阅类型编码 */
    code?: string | null
    /** 订阅类型描述 */
    description?: string | null
    /** 是否测试阶段 */
    isTestingPhase?: boolean
    /** 订阅价格 */
    subscribePriceOutputs?: SubscribePriceOutput[] | null
    /** 订阅所包含的授权 */
    subscribeLicensesOutputs?: SubscribeLicensesOutput[] | null
  }
  /** 订阅价格 */
export interface SubscribePriceOutput {
    /** @format int64 */
    id?: number
    /** @format int64 */
    vipDictTypeId?: number
    /** @format int32 */
    duration?: number
    /** 时长类型:Day(天)=0,Month(月)=1,Year(年)=2,Min(分钟)=3,Hour(小时)=4 */
    durationTypeEnum?: DurationTypeEnum
    /** @format double */
    price?: number
    /**
     * 最大申请次数，申请次数为1次时，为体验价格
     * @format int32
     */
    maxApplyCount?: number | null
    /**
     * 排序
     * @format int32
     */
    sort?: number
  }
  /** 订阅所包含的授权 */
export interface SubscribeLicensesOutput {
    /** @format int64 */
    id?: number
    /**
     * Vip字典类型Id
     * @format int64
     */
    vipDictTypeId?: number
    /**
     * 授权Id
     * @format int64
     */
    licensesDictTypeId?: number
    /** 授权名称 */
    licensesType?: string | null
    /** 描述 */
    description?: string | null
    /**
     * 排序
     * @format int32
     */
    sort?: number
    subscribeFunctionOutputs?: SubscribeFunctionOutput[] | null
  }
  /** 订阅所包含的功能 */
export interface SubscribeFunctionOutput {
    /** @format int64 */
    id?: number
    /**
     * Vip字典类型Id
     * @format int64
     */
    vipDictTypeId?: number
    /** 名称 */
    name?: string | null
    /** 是否具备该权限 */
    hasFunction?: boolean
    /**
     * 排序
     * @format int32
     */
    sort?: number
  }

  /**
 * 时长类型:Day(天)=0,Month(月)=1,Year(年)=2,Min(分钟)=3,Hour(小时)=4
 * @format int32
 */
export type DurationTypeEnum = 0 | 1 | 2 | 3 | 4


export interface VipDictTypeGetPageOutput {
    /** @format int64 */
    id?: number
    name?: string | null
    code?: string | null
    description?: string | null
    enabled?: boolean
    /** @format int32 */
    sort?: number
    /** 是否赠送授权 */
    isGiveLicenses?: boolean
  }
