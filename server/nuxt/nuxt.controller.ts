import { Controller, Get, Request, Response } from '@nestjs/common';
import * as config from "../../nuxt.config.js";
import { Builder, Nuxt } from "nuxt";

@Controller()
export class NuxtController {
  nuxt: Nuxt;

  constructor() {
    if (process.env.NODE_ENV === "production") {
      config.dev = false;
      this.nuxt = new Nuxt(config);
    } else if (process.env.IS_NUXT_ENABLED) {
      this.nuxt = new Nuxt(config);
      new Builder(this.nuxt).build();
    }
  }

  @Get('*')
  async root(
    @Request() req,
    @Response() res
  ) {
    if (this.nuxt) {
      await this.nuxt.render(req, res);
    } else {
      res.send('Nuxt is disabled.');
    }
  }
}
