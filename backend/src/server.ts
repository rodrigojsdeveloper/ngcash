import { AppDataSource } from "./data-source";
import { app } from "./app";

(async () => {
  await AppDataSource.initialize()
    .then(() => {
      console.log("DataSource has been initialized");
    })
    .catch((err) =>
      console.error("Error during DataSource initialization", err)
    );

  app.listen(process.env.PORT || 3000, () => console.log("Server running"));
})();
