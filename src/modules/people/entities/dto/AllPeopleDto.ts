import { PeopleDto } from "./PeopleDto"

export type AllPeopleDto={
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Array<PeopleDto>
}