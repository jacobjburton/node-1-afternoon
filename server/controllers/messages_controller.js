let messages = [];
let id = 0;

module.exports =
{
    create: (req, res) => 
    {
        const { text, time } = req.body;
        messages.push({ id, text, time });
        id++;
        res.status(200).send(messages);
    },
    read: (req, res) =>
    {
        res.status(200).send(messages);
    },
    update: (req, res) =>
    {
        let { text } = req.body;
        let newId = +req.params.id
        let messageIndex = messages.findIndex((m) => m.id === newId);
        let newMessage = messages[messageIndex];
        messages[messageIndex] =
        {
            id: newMessage.id,
            text: text,
            time: newMessage.time
        };
        res.status(200).send(messages);
    },
    delete: (req, res) =>
    {
        let deleteId = +req.params.id;
        let messageIndex = messages.findIndex((m) => m.id === deleteId);
        messages.splice(messageIndex, 1);
        res.status(200).send(messages);
    }
};