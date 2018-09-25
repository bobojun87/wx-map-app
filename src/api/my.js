import request from '@/utils/request'
import qs from 'qs'

export function getSchInfoDaySchPlan(params) {
    return request({
        url: '/api/wms/sch_info/day_sch_plan',
        method: 'get',
        params: params
    })
}