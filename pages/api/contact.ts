"use server";
import { mailOptions, transporter } from "@/config/nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  email: string;
  message: string;
};

interface ContactMessageFields {
  [key: string]: string;
}

const CONTACT_MESSAGE_FIELDS: ContactMessageFields = {
  name: "Nume ",
  email: "Email ",
  subject: "Subiect",
  message: "Mesaj",
};

const generateEmailContat = (data: Data) => {
  const setDataFields = (key: any) => {
    let dataFields = CONTACT_MESSAGE_FIELDS[key];
    return dataFields;
  };

  const stringData = Object.entries(data).reduce((str, [key, val]) => {
    return (str += `${setDataFields(key)} : \n${val}} \n \n`);
  }, "");

  const htmlData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `<h1 
    class="form-heading" align="left">${setDataFields(
      key
    )}</h1><p class="form-answer" align="left">${val}</p>`),
    ""
  );

  return {
    text: stringData,
    html: `<!DOCTYPE html><html> <head> <title></title> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <style type="text/css"> body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}table{border-collapse: collapse !important;}body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}@media screen and (max-width: 525px){.wrapper{width: 100% !important; max-width: 100% !important;}.responsive-table{width: 100% !important;}.padding{padding: 10px 5% 15px 5% !important;}.section-padding{padding: 0 15px 50px 15px !important;}}.form-container{margin-bottom: 14px; padding: 20px; border: 1px dashed #ccc;}.form-heading{color: orange;font-weight:600; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;text-align: left; line-height: 10px; font-size: 18px; margin: 0 0 8px; padding: 0;}.form-answer{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 30px 0; padding: 0;}div[style*="margin: 16px 0;"]{margin: 0 !important;}</style> </head> <body style="margin: 0 !important; padding: 0 !important; background: #fff"> <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; " ></div><table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding" > <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" class="responsive-table" > <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0" > <tr> <td style=" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; margin-bottom:2rem!important; " class="padding message-content" > <h2>Contact FormEPV</h2> <div class="form-container">${htmlData}</div></td></tr></table> </td></tr></table> </td></tr></table> </td></tr></table> </body></html>`,
  };
};

interface ErrorData {
  message: any;
  suceess: boolean;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ErrorData>
) {
  if (req.method === "POST") {
    const data = req.body;
    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContat(data),
        subject: data.subject,
      });

      return res.status(200).json({
        suceess: true,
        message: undefined,
      });
    } catch (error: any) {
      console.log(error);
      return res.status(400).json({
        message: error.message,
        suceess: false,
      });
    }
  }
  return res.status(400).json({
    message: "Bad request",
    suceess: false,
  });
}
