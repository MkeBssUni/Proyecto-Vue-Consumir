import { AxiosRequestConfig } from 'axios';
import AxiosClient from './axios'

export default{
    doGet(endpoint: string){
        return AxiosClient.get(endpoint);
    },
    doPost(endpoint: string, object: object, config?: AxiosRequestConfig ){
        return AxiosClient.post(endpoint,object,config)
    }
}