import { IDatabaseDriver } from "@mikro-orm/core";
import { Connection, EntityManager } from "typeorm";

export type MyContext = {
	em: EntityManager<IDatabaseDriver<Connection>>;
};
