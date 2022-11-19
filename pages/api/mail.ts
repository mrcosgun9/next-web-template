// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  isError: boolean;
  error: string;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.body);

  const data: any = JSON.parse(req.body);
  const transporter = nodemailer.createTransport({
    host: "ogbglobal.com",
    port: 465,
    secure: true,
    auth: {
      user: "info@ogbglobal.com",
      pass: "Tunus4272cad*",
    },
  });
  try {
    await transporter.sendMail({
      from: "info@ogbglobal.com",
      to: "mrcosgun9@gmail.com",
      subject: `İletişim formundan ${data.name} tarafından iletiniz bulunmaktadır.`,
      html: `<p><strong>İsim Soyisim: </strong> ${data.name}</p>
        <p><strong>Email: </strong> ${data.email}</p>
        <p><strong>Açıklama: </strong> ${data.subject}</p>
        <p><strong>Soru: </strong> ${data.question}</p>
        <p><strong>Mesaj: </strong> ${data.message}</p>`,
    });
  } catch (error: any) {
    return res
      .status(500)
      .json({ error: error.message || error.toString(), isError: true });
  }
  return res.status(200).json({ error: "", isError: false });
}
