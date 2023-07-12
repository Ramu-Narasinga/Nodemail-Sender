import {
    Transporter,
    createTransport,
} from "nodemailer";
import { Options as TransporterOptions } from "nodemailer/lib/smtp-transport";
import { Options as MailerOptions } from "nodemailer/lib/mailer";

import { envVariablesRequired } from "./constants";

export class Mailer {
    
    transporter: Transporter | undefined;

    constructor() {
	    this._checkEnv(envVariablesRequired);
        this.transporter = createTransport(this._getOptions());
    }

    private _checkEnv(variables: String[]) {
        var missing = [];
        
        variables.forEach(function(variable) {
            if (!process.env.variable) {
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
            name: process.env.NODEMAIL_SENDER_NAME,
            host: process.env.NODEMAIL_SENDER_HOST,
            port: +process.env.NODEMAIL_SENDER_PORT,
            secure: Boolean(process.env.NODEMAIL_SENDER_SECURE),
            auth: process.env.NODEMAIL_SENDER_USERNAME 
                ? {
                    user: process.env.NODEMAIL_SENDER_USERNAME,
                    pass: process.env.NODEMAIL_SENDER_PASSWORD
                } 
                : undefined,
            tls: process.env.NODEMAIL_SENDER_SECURE
                ? 
                (
                    process.env.NODEMAIL_SENDER_TLS_CIPHERS ?
                        {
                            ciphers: process.env.NODEMAIL_SENDER_CIPHERS
                        }
                        : undefined
                )
                : {
                    rejectUnauthorized: false
                }
                
        }
    }

    sendMail = async (mailOptions: MailerOptions) => {
        const result = await this.transporter.sendMail(mailOptions);
        return result;
    }
}