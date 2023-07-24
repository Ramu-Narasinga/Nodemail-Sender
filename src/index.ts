import {
    Transporter,
    createTransport,
} from "nodemailer";
import { Options as TransporterOptions } from "nodemailer/lib/smtp-transport";
import { Options as MailerOptions } from "nodemailer/lib/mailer";
import 'dotenv/config';

import { envVariablesRequired, getAuth, getTls } from "./utils";

export class Mailer {
    
    transporter: Transporter | undefined;

    constructor(smtpConfig?: string) {
      if (smtpConfig) {
        this.transporter = createTransport(smtpConfig);
      } else {
        this._checkEnv(envVariablesRequired);
        this.transporter = createTransport(this._getOptions());
      }
    }

    private _checkEnv(variables: String[]) {
        var missing = [];
        console.log("process.env:", process.env);
        variables.forEach(function(variable) {
            if (!process.env[variable as string]) {
              missing.push(variable);
            }
        });
        
        if (missing.length) {
            if (missing.length === 1) {
            throw new Error('Missing environment variable ' + missing[0]);
            }
            throw new Error('Missing environment variables ' + missing.join(', '));
        }
    }

    private _getOptions(): TransporterOptions {
        return {
            name: process.env.SMTP_NAME,
            host: process.env.SMTP_HOST,
            port: +process.env.SMTP_PORT,
            secure: process.env.SMTP_SECURE == 'true' ? true : false,
            auth: getAuth(),
            tls: getTls()
        }
    }

    sendMail = async (mailOptions: MailerOptions) => {
        const result = await this.transporter.sendMail(mailOptions);
        return result;
    }
}