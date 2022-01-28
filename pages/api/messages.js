// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: "secret_rZqKbIlnVSfXQT371HU9PCNke0xwkwPHzhmn5s0285o",
});

export default async function SaveMessage(req, res) {
  await notion.pages
    .create({
      parent: {
        database_id: "5ee414c6677a41b189853fe5acddc033",
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
      res.status(400).json({ message: "Erro ao enviar a mensagem" });
    });
}
