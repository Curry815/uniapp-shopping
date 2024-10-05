import { http } from "@/utils/http";
import type { LoginResult } from "./member";

type LoginWxMinParams = {
  code: string
  encryptedData?: string
  iv?: string
}

/**
 * 小程序登录 (企业版)
 * @param data 请求参数
 */
export const postLoginWxMinAPI = (data: LoginWxMinParams) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin',
    data,
  });
}

/**
 * 小程序登录（内测开发版）
 * @param phoneNumber 模拟手机号码
 */
export const postLoginWxMinSimpleAPI = (phoneNumber: string) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: {
      phoneNumber,
    },
  })
}

type LoginParams = {
  account: string
  password: string
}
/**
 * 传统登录-用户名+密码
 * @param data 请求参数
 */
export const postLoginAPI = (data: LoginParams) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login',
    data,
  })
}
