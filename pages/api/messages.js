// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: "secret_Pukn0gYBFduDU17k6ki4S0Zh0qJrLSVINvLnE8LM0Jo",
});

export default async function SaveMessage(req, res) {
  await notion.pages
    .create({
      parent: {
        database_id: "0375d8acb5c043f2803f2fa72ba9d3a6",
      },
      properties: {
        Nome: {
          type: "title",
          title: [
            {
              type: "text",
              text: {
                content: req.body.name,
              },
            },
          ],
        },
        Email: {
          type: "email",
          email: req.body.email,
        },
        Mensagem: {
          type: "rich_text",
          rich_text: [
            {
              type: "text",
              text: { content: req.body.message },
            },
          ],
        },
        Quantidade: {
          type: "rich_text",
          rich_text: [
            {
              type: "text",
              text: { content: req.body.qtd },
            },
          ],
        },
        Telefone: {
          type: "phone_number",
          phone_number: req.body.phone,
        },
      },
    })
    .then(() => {
      res.status(201).json({ message: "Mensagem enviada" });
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ message: "Erro ao enviar a mensagem" });
    });
}
