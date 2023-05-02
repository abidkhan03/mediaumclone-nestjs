import { Injectable } from "@nestjs/common";

@Injectable()
export class TagService {
    findAll(): string[] {
        return ['mongodb', 'mysql', 'mariadb', 'postgresql', 'sqlserver','sqlite'];
    }
}