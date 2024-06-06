import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateTeamDto } from "../../dto/create.team.dto";
import { TeamsRepository } from "../../reposirories/teams.repository";
import { Teams } from "src/tables/teams";

export class CreateTeamCommand {
    constructor(public readonly body: CreateTeamDto) { }
}

@CommandHandler(CreateTeamCommand)
export class CreateTeamUseCase implements ICommandHandler<CreateTeamCommand> {
    constructor(private readonly teamsRepository: TeamsRepository) { }

    async execute(command: CreateTeamCommand): Promise<any> {
        const newTeam = Teams.build({ city: command.body.city, club: command.body.club, description: command.body.description, tittle: command.body.title });
        return this.teamsRepository.createTeam(newTeam);
    }
}