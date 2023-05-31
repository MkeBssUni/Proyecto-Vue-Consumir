import { ResponseApi } from "@/kernel/types";
import { AllPeopleDto } from "../../entities/dto/AllPeopleDto";

export interface PeopleRepository{
    getAllPeople(page: number): Promise<ResponseApi<AllPeopleDto>>;
    
}