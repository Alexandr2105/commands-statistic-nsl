import { Inject, Injectable } from "@nestjs/common";
import { providersConst } from "src/common/const/providers";
import { Teams } from "src/tables/teams";

@Injectable()
export class TeamsRepository {
    constructor(@Inject(providersConst.teamsRepository) private readonly teamsModel: typeof Teams) { }

    async createTeam(newTeam: Teams) {
        return newTeam.save();
    }
}