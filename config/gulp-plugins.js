// Импортируем модули
import notify from "gulp-notify";
import newer from "gulp-newer";
import plumber from "gulp-plumber";
import ifPlugin from "gulp-if";
import prettier from "gulp-prettier";
import rename from "gulp-rename";
import babel from "gulp-babel";

// Экспортируем объект
export const plugins = {
  notify,
  if: ifPlugin,
  prettier,
  newer,
  plumber,
  rename,
  babel,
};
