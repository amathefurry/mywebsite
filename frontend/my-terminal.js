function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const commands = {
    help(arg) {
        if (typeof arg === 'undefined') {
        term.echo(`list of all available commands: ${help}`);
        } else {
        if (arg == 'help') {term.echo(`Lists all available commands.`);} else {
        if (arg == 'echo') {term.echo(`help echo
            
            jokes aside, it just returns your arguments`);} else {
        if (arg == 'funfact') {term.echo(`fetch a funfact about me, there are currently ${facts} funfacts about me, you can specify which one you want to fetch or you can provide no arguments for a random one`);} else {
        if (arg == 'neofetch') {term.echo(`fetch some specs about my laptop`);} else {
        if (arg == 'rolld') {term.echo(`Roll a dice. Default is d20, specifying a number will let you roll a specific die. Negative numbers will just give negative values.`)} else {
        if (arg == 'exit') {term.echo(`Exits the terminal window. By default it will also clear the terminal, if you do not want that use the "--no-clear" flag.`)} else {
        if (arg == 'clear') {term.echo(`clears the terminal.`)} else {
        if (arg == 'easteregg') {window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");} else {
            term.echo(`error 404: command not found. Try 'help' for a list of commands`);
        }
        }}}}}}}}
    },
    echo(...args){
        term.echo(args.join(' '));
    },
    funfact(arg){
        const facts = 6;
        var factnr = getRandomInt(facts);
        if (true) {
            if (!isNaN(arg) ^ typeof arg === 'undefined' ^ arg == "rnd" ^ arg == "random") {
                if(!isNaN(arg)){
                factnr = arg-1;
                }
                if (factnr < 0 ^ factnr > facts-1) {
                   term.echo(`Enter a number between 1 and ${facts}`)
                }
                if (factnr == undefined) {
                term.echo(`either i messed something up, or you did something to get this... or maybe you're just reading it in the source code`)
                }
                if (factnr == 0) {
                term.echo(`I am red-green colourblind (protanomalic), and this disability made me choose to drop out of flight school (Aeroclubul Romaniei offers free training to study gliding, and i was a student at that ATO (Authorized Training Organization) in 2025.)`);
                term.echo(``);
                }
                if (factnr == 1) {
                term.echo(`I like skateboarding, and i recently started to get the hang of ollies`);
                term.echo(``);
                }
                if (factnr == 2) {
                term.echo(`The background image is a picture i took in November 2025, while hiking on Gutai Mountains, here's the aproximate coordonates of the peak on which i took the picture 47.69549436025846, 23.860829089137443`);
                term.echo(``);
                }
                if (factnr == 3) {
                term.echo(`I urbex and i sometimes rooftop buildings, despite being slightly afraid of heights.`);
                term.echo(``);
                }
                if (factnr == 4) {
                term.echo(`I am boycotting fastfashion (production of new clothes has huge impacts on the environment) and actively avoid buying from fastfashion stores, i thrift and i absolutely love DIY clothing, i identify as being into alternative subcultures, i am also a furry.`);
                term.echo(``);
                }
                if (factnr == 5) {
                term.echo(`My favorite videogame is Rain World, and my laptop's and phone's hostnames are inspired by characters from the game. If you read this and like indie videogames, please give Rain World a try.`);
                term.echo(``);
                }
            } else {
                term.echo(`Please enter a valid number`);
            }
        }
    },
    neofetch(arg){
        term.echo(`ama@moon 
-------- 
OS: Arch Linux x86_64 
Host: 83ER IdeaPad Slim 3 15IAH8 
Kernel: linux-zen  
Resolution: 1920x1080, 60Hz [Built-in]
DE: KDE Plasma
WM: kwin 
Theme: Breeze-Dark [GTK2], Breeze [GTK3] 
Icons: breeze-dark [GTK2/3] 
Terminal: kitty 
CPU: 12th Gen Intel i5-12450H (12) @ 4.4GHz 
GPU: Intel Alder Lake-P GT1 [UHD Graphics] 
Memory: 15.31GiB
Swap: Disabled
Disk (/): 30.79 GiB / 51.22 GiB (60%) - btrfs
Disk (/home): 97.98 GiB / 425.24 GiB (23%) - btrfs`)
        if (arg == "--ascii_distro" ^ arg == "-L") {term.echo(`ASCII Art Logo: Too hard to implement, sorry`);}
        term.echo(``)
    },
    rolld(arg){
        if (!isNaN(arg)) {
            if (arg == 0) {term.echo(`you tried rolling a die with no sides... nothing happened.`)}
        else {
            term.echo(getRandomInt(arg)+1);
        }
        } else {
            if (typeof arg === 'undefined') {term.echo(getRandomInt(20)+1);} else {
            term.echo(`Enter a number`)}
        }
    },
    exit(arg){
        if (arg != "--no-clear") {
            this.clear()
        }
        document.getElementById('terminalwindow').style.display='none';
    },
    // maybe add some day if revisiting the project: LAST.FM CLI COMMANDS >:3
};

const formatter = new Intl.ListFormat('en', {
  style: 'long',
  type: 'conjunction',
});

const command_list = ['clear'].concat(Object.keys(commands));
const help = formatter.format(command_list);

const term = $('div.termi').terminal(commands,
{
    greetings: false,
    checkArity: false,
});
