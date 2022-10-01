import { EntityRepository, Repository } from "typeorm";
import {Sales} from "../entities/Sales";

@EntityRepository(Sales)
export class SalesRepositories extends Repository<Sales> {}

