import { AppDataSource } from "./data-source";
import { app } from "./app";

(async () => {
  await AppDataSource.initialize()
    .then(() => {
      console.log("Data Source has been initialized");
    })
    .catch((err) =>
      console.error("Error during Data Source initialization", err)
    );

  app.listen(process.env.PORT || 3000, () => console.log("Server running"));
})();
