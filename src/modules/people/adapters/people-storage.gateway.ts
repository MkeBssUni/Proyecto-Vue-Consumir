import { ResponseApi } from "@/kernel/types";
import { AllPeopleDto } from "../entities/dto/AllPeopleDto";
import { PeopleRepository } from "../use-cases/ports/people.repository";
import api from '@/config/http-client.gateway'
import { PeopleDto } from "../entities/dto/PeopleDto";
export class PeopleStorageGateway implements PeopleRepository{
    async getAllPeople(page: number): Promise<ResponseApi<AllPeopleDto>> {
        try {
            const res= await api.doGet(`/users?page=${page}`);
            return{
                status: res.status,
                error: false,
                message: 'OK',
                data: res.data
            } as ResponseApi<AllPeopleDto>
        } catch (error) {
            throw new Error("Error al consultar las personas")
        }
    }

}