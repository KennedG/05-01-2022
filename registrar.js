const Discord = require('discord.js')
module.exports = {
    name: 'registrar',
    aliases: [''],
    run: async (client, message, args) => {

        let homen = "920793149620760586"// coloque o id do cargo homen
        let mulher1 = "920793283414863874"// id do cargo mulher
        let hetero = "928436812085612605"// id do cargo hetero
        let lgbt = "920793659664916504"// id do cargo lgbt
        let solteiro = "928437083935240193"// id do cargo solteiro
        let casado = "928437307386757170"// id do cargo casado
        let namorando = "928437370653659176"// id do cargo namorando
        let enrolado = "928437383182053436"// id do cargo enrolado
        let registrado = "645061817948831754"// id do cargo registrado
        //let equiperegistro = "843208119387291648"// id do cargo da equipe de registro

        //if (!message.member.roles.cache.get(`${equiperegistro}`)) return message.reply(`Você não é da equipe de registro`)

        //let membro = args[0];

        //if (!membro) return message.reply('Mencione alguém para registrar')

        if (message.member.roles.cache.get(`${registrado}`)) return message.reply(`Você já está registrado.`)


        let genero = new Discord.MessageEmbed()
            .setTitle('Genero')
            .setDescription('Escolha seu gênero utilizando os botões abaixo!')
            .setColor('RANDOM')

        let completo = new Discord.MessageEmbed()
            .setTitle('Registro completo')
            .setDescription('Registro efetuado!')
            .setColor('RANDOM')

        let sexualidade = new Discord.MessageEmbed()
            .setTitle('Sexualidade')
            .setDescription('Escolha sua sexualidade utilizando os botões abaixo!')
            .setColor('RANDOM')

        let civil = new Discord.MessageEmbed()
            .setTitle('Estado civil')
            .setDescription('Escolha seu estado civil  utilizando os botões abaixo!')
            .setColor('RANDOM')



        let buttons = new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageButton()
                    .setCustomId('1')
                    .setStyle('SECONDARY')
                    .setLabel('Homem')
                    .setDisabled(false),

                new Discord.MessageButton()
                    .setCustomId('2')
                    .setStyle('SECONDARY')
                    .setLabel('Mulher')
                    .setDisabled(false),

            )

        let sexualidadeb = new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageButton()
                    .setCustomId('3')
                    .setStyle('SECONDARY')
                    .setLabel('Hétero')
                    .setDisabled(false),

                new Discord.MessageButton()
                    .setCustomId('4')
                    .setStyle('SECONDARY')
                    .setLabel('LGBT')
                    .setDisabled(false)
            )

        let civilb = new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageButton()
                    .setCustomId('5')
                    .setStyle('SECONDARY')
                    .setLabel('Solteiro')
                    .setDisabled(false),

                new Discord.MessageButton()
                    .setCustomId('6')
                    .setStyle('SECONDARY')
                    .setLabel('Namorando')
                    .setDisabled(false),

                new Discord.MessageButton()
                    .setCustomId('7')
                    .setStyle('SECONDARY')
                    .setLabel('Casado')
                    .setDisabled(false),

                new Discord.MessageButton()
                    .setCustomId('8')
                    .setStyle('SECONDARY')
                    .setLabel('Enrolado')
                    .setDisabled(false)
            )

        message.reply({ embeds: [genero], components: [buttons] }).then(msg => {

            const filter = i => i.isButton();
            const collector = msg.createMessageComponentCollector({ filter: filter, time: 6e4 });

            collector.on("collect", async (interaction) => {
                if (interaction.user.id !== message.author.id) return;

                switch (interaction.customId) {
                    case '1': {
                        interaction.member.roles.add(homen)


                        message.reply({ embeds: [sexualidade], components: [sexualidadeb] }).then(msg => {

                            msg.delete()

                            const filter = i => i.isButton();
                            const collector = msg.createMessageComponentCollector({ filter: filter, time: 6e4 });

                            collector.on("collect", async (interaction) => {
                                if (interaction.user.id !== message.author.id) return;

                                switch (interaction.customId) {
                                    case '3': {

                                        interaction.member.roles.add(hetero)


                                        message.reply({ embeds: [civil], components: [civilb] }).then(msg => {

                                            const filter = i => i.isButton();
                                            const collector = msg.createMessageComponentCollector({ filter: filter, time: 6e4 });

                                            collector.on("collect", async (interaction) => {
                                                if (interaction.user.id !== message.author.id) return;

                                                switch (interaction.customId) {
                                                    case '5': {

                                                        interaction.member.roles.add(solteiro)

                                                        msg.delete()

                                                        message.reply({ embeds: [completo] })


                                                        interaction.member.roles.add(registrado)


                                                        await interaction.deferUpdate();
                                                        break;

                                                    }
                                                    case '6': {

                                                        interaction.member.roles.add(namorando)
                                                        msg.delete()

                                                        message.reply({ embeds: [completo] })




                                                        interaction.member.roles.add(registrado)




                                                        await interaction.deferUpdate();
                                                        break;

                                                    }
                                                    case '7': {


                                                        interaction.member.roles.add(casado)

                                                        msg.delete()

                                                        message.reply({ embeds: [completo] })

                                                        interaction.member.roles.add(registrado)

                                                        await interaction.deferUpdate();
                                                        break;

                                                    }

                                                    case '8': {

                                                        interaction.member.roles.add(enrolado)

                                                        msg.delete()

                                                        message.reply({ embeds: [completo] })

                                                        interaction.member.roles.add(registrado)

                                                        await interaction.deferUpdate();
                                                        break;


                                                    }

                                                }
                                            })
                                        })

                                        msg.delete()

                                        await interaction.deferUpdate();
                                        break;

                                    }
                                    case '4': {

                                        interaction.member.roles.add(lgbt)


                                        message.reply({ embeds: [civil], components: [civilb] }).then(msg => {

                                            const filter = i => i.isButton();
                                            const collector = msg.createMessageComponentCollector({ filter: filter, time: 6e4 });

                                            collector.on("collect", async (interaction) => {
                                                if (interaction.user.id !== message.author.id) return;

                                                switch (interaction.customId) {
                                                    case '5': {

                                                        interaction.member.roles.add(solteiro)

                                                        msg.delete()

                                                        message.reply({ embeds: [completo] })

                                                        interaction.member.roles.add(registrado)



                                                        await interaction.deferUpdate();
                                                        break;

                                                    }
                                                    case '6': {

                                                        interaction.member.roles.add(namorando)
                                                        msg.delete()

                                                        message.reply({ embeds: [completo] })

                                                        interaction.member.roles.add(registrado)







                                                        await interaction.deferUpdate();
                                                        break;

                                                    }
                                                    case '7': {


                                                        interaction.member.roles.add(casado)

                                                        msg.delete()

                                                        message.reply({ embeds: [completo] })

                                                        interaction.member.roles.add(registrado)

                                                        await interaction.deferUpdate();
                                                        break;

                                                    }

                                                    case '8': {

                                                        interaction.member.roles.add(enrolado)

                                                        msg.delete()

                                                        message.reply({ embeds: [completo] })

                                                        interaction.member.roles.add(registrado)

                                                        await interaction.deferUpdate();
                                                        break;


                                                    }

                                                }
                                            })
                                        })

                                        msg.delete()

                                        await interaction.deferUpdate();
                                        break;

                                    }

                                }
                            })
                        })


                    }
                    case '2': {

                        interaction.member.roles.add(mulher1)
                        msg.delete()

                        message.reply({ embeds: [sexualidade], components: [sexualidadeb] }).then(msg => {

                            const filter = i => i.isButton();
                            const collector = msg.createMessageComponentCollector({ filter: filter, time: 6e4 });

                            collector.on("collect", async (interaction) => {
                                if (interaction.user.id !== message.author.id) return;

                                switch (interaction.customId) {
                                    case '3': {

                                        interaction.member.roles.add(hetero)

                                        msg.delete()

                                        message.reply({ embeds: [civil], components: [civilb] }).then(msg => {

                                            const filter = i => i.isButton();
                                            const collector = msg.createMessageComponentCollector({ filter: filter, time: 6e4 });

                                            collector.on("collect", async (interaction) => {
                                                if (interaction.user.id !== message.author.id) return;

                                                switch (interaction.customId) {
                                                    case '5': {

                                                        interaction.member.roles.add(solteiro)

                                                        msg.delete()

                                                        message.reply({ embeds: [completo] })

                                                        interaction.member.roles.add(registrado)





                                                        await interaction.deferUpdate();
                                                        break;

                                                    }
                                                    case '6': {

                                                        interaction.member.roles.add(namorando)
                                                        msg.delete()

                                                        message.reply({ embeds: [completo] })



                                                        interaction.member.roles.add(registrado)





                                                        await interaction.deferUpdate();
                                                        break;

                                                    }
                                                    case '7': {


                                                        interaction.member.roles.add(casado)

                                                        msg.delete()

                                                        message.reply({ embeds: [completo] })

                                                        interaction.member.roles.add(registrado)

                                                        await interaction.deferUpdate();
                                                        break;

                                                    }

                                                    case '8': {

                                                        interaction.member.roles.add(enrolado)

                                                        msg.delete()

                                                        message.reply({ embeds: [completo] })

                                                        interaction.member.roles.add(registrado)

                                                        await interaction.deferUpdate();
                                                        break;


                                                    }

                                                }
                                            })
                                        })



                                        await interaction.deferUpdate();
                                        break;

                                    }
                                    case '4': {

                                        interaction.member.roles.add(lgbt)

                                        msg.delete()

                                        message.reply({ embeds: [civil], components: [civilb] }).then(msg => {

                                            const filter = i => i.isButton();
                                            const collector = msg.createMessageComponentCollector({ filter: filter, time: 6e4 });

                                            collector.on("collect", async (interaction) => {
                                                if (interaction.user.id !== message.author.id) return;

                                                switch (interaction.customId) {
                                                    case '5': {

                                                        interaction.member.roles.add(solteiro)

                                                        msg.delete()

                                                        message.reply({ embeds: [completo] })





                                                        await interaction.deferUpdate();
                                                        break;

                                                    }
                                                    case '6': {

                                                        interaction.member.roles.add(namorando)
                                                        msg.delete()

                                                        message.reply({ embeds: [completo] })









                                                        await interaction.deferUpdate();
                                                        break;

                                                    }
                                                    case '7': {


                                                        interaction.member.roles.add(casado)

                                                        msg.delete()

                                                        message.reply({ embeds: [completo] })



                                                        await interaction.deferUpdate();
                                                        break;

                                                    }

                                                    case '8': {

                                                        interaction.member.roles.add(enrolado)

                                                        msg.delete()

                                                        message.reply({ embeds: [completo] })



                                                        await interaction.deferUpdate();
                                                        break;


                                                    }

                                                }
                                            })
                                        })



                                        await interaction.deferUpdate();
                                        break;

                                    }

                                }
                            })
                        })

                    }


                }
            })
        })
    }
}