import { Body, Controller, Post } from "@nestjs/common";
import { CreateTeamDto } from "./dto/create.team.dto";
import { TeamsRepository } from "./reposirories/teams.repository";
import { CommandBus } from "@nestjs/cqrs";
import { CreateTeamCommand } from "./application/useCases/create.team.use-case";

@Controller("teams")
export class TeamsController {
    constructor(private readonly commandBus: CommandBus) { }

    @Post()
    async createTeam(@Body() body: CreateTeamDto) {
        return this.commandBus.execute(new CreateTeamCommand(body));
    }
}