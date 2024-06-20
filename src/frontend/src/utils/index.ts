interface JwtPayload {
  [key: string]: any
}
import type { App, Component } from 'vue'
/**
 * jwt token解密
 * @param {String} token jwt token字符串
 */
export function parseJwtToken(token: string): JwtPayload | null {
  const base64Url = token?.split('.')[1]
  if (!base64Url) {
    return null
  }

  const base64 = base64Url.replace('-', '+').replace('_', '/')
  try {
    const payload = JSON.parse(window.atob(base64))
    return payload
  } catch {
    return null
  }
}

/**
 * 获得文件后缀名
 * @param {String} filename 文件名
 */
export const getFileExtension = (filename: string): string => {
  const index = filename.lastIndexOf('.')
  return index >= 0 ? filename.substring(index) : ''
}
// https://github.com/vant-ui/vant/issues/8302
type EventShim = {
  new (...args: any[]): {
    $props: {
      onClick?: (...args: any[]) => void
    }
  }
}

export type WithInstall<T> = T & {
  install(app: App): void
} & EventShim

export type CustomComponent = Component & { displayName?: string }

export const withInstall = <T extends CustomComponent>(component: T, alias?: string) => {
  ;(component as Record<string, unknown>).install = (app: App) => {
    const compName = component.name || component.displayName
    if (!compName) return
    app.component(compName, component)
    if (alias) {
      app.config.globalProperties[alias] = component
    }
  }
  return component as WithInstall<T>
}
/**
 * @param {Date | number | string} time 需要转换的时间
 * @param {String} fmt 需要转换的格式 如 yyyy-MM-dd、yyyy-MM-dd HH:mm:ss
 */
export function formatTime(time: Date | number | string, fmt: string) {
  if (!time) return ''
  else {
    const date = new Date(time)
    const o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'H+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
      'q+': Math.floor((date.getMonth() + 3) / 3),
      S: date.getMilliseconds(),
    }
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (const k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
      }
    }
    return fmt
  }
}

export default {
  parseJwtToken,
  getFileExtension,
}
