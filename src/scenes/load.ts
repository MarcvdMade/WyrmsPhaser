import Phaser from 'phaser'

export default class Load extends Phaser.Scene
{
    constructor()
    {
        super('load')

    }

    preload() {
        //load backgrounds
        this.load.image('blueCave', 'assets/backgrounds/menubg.png')
        this.load.image('cavebg', 'assets/backgrounds/background.png')
        this.load.image('underwaterBackground', 'assets/backgrounds/bg_aal.png');
        this.load.image('sky', 'assets/backgrounds/sky.png')
        this.load.image('levelselect', 'assets/backgrounds/levelselect.png')
        this.load.image('gameover', 'assets/backgrounds/gameover.png')
        this.load.image('credits', 'assets/backgrounds/credits.png')

        //load menu buttons
        this.load.image('start', 'assets/menubuttons/play.png')
        this.load.image('levelsb', 'assets/menubuttons/levelsb.png')
        this.load.image('credits', 'assets/menubuttons/credits.png')

        //load platforms
        this.load.image('grassPlatform', 'assets/grassplatforms/ground.png')

        //ice world platforms
        this.load.image('iceground1' , 'assets/icegrounds/ground1.png') // 1
        this.load.image('iceground2', 'assets/icegrounds/ground2.png') //2
        this.load.image('iceground3', 'assets/icegrounds/ground3.png') //3
        this.load.image('stoneground5', 'assets/icegrounds/ground5.png') //5
        this.load.image('ice', 'assets/icegrounds/ice.png') //ice

        //load players
        this.load.spritesheet('worm', 'assets/players/worm.png', { 
            frameWidth: 65, frameHeight: 60
        })

        this.load.spritesheet('aal', 'assets/players/aal.png', { 
            frameWidth: 64.46, frameHeight: 60
        })

        //load enemys
        this.load.spritesheet('mol', 'assets/enemys/mole.png',{frameWidth: 65.6, frameHeight: 57})
        this.load.spritesheet('swimmole', 'assets/enemys/swimmole.png',{frameWidth: 65.7, frameHeight: 57})
        this.load.spritesheet('robot', 'assets/enemys/robot.png',{frameWidth: 65, frameHeight: 40})

        //load pickups
        this.load.image('suitcase', 'assets/pickups/koffer.png')
        this.load.image('apple', 'assets/pickups/apple.png')

        //load misc
        this.load.image('lava', 'assets/misc/lavaground.png')
        this.load.image('heart', 'assets/healthbar/heart.png')
        this.load.image('deathheart', 'assets/healthbar/death.png')

        //load sounds
        this.load.audio('menuMusic', 'assets/backgroundsounds/menuMusic.mp3')
        this.load.audio('deathMusic', 'assets/backgroundsounds/deathMusic.mp3')
        this.load.audio('gamemusic', 'assets/backgroundsounds/hope.mp3')
        this.load.audio('lava', 'assets/backgroundsounds/lava.mp3')
        this.load.audio('playerJump', 'assets/playersounds/jump.wav')
        // this.load.audio('swim', 'assets/playersounds/splash.mp3')
        // this.load.audio('levelup', 'assets/playersounds/levelup.wav')

        //Cave 
        this.load.image('cave', 'assets/backgrounds/cave.png')
        this.load.image('stoneground', 'assets/grassplatforms/stoneground.png')
        this.load.image('stonegroundsmall', 'assets/grassplatforms/stonegroundsmall.png')

        //lava
        this.load.image('lavabg', 'assets/backgrounds/lavabg.png')

        //load healthbar
        this.load.image('healthbar', 'assets/healthbar/healthbar.png' )


        //load plugin
        // this.load.script('WeaponPlugin', 'node_modules/phaser3-weapon-plugin/out/WeaponPlugin.js');


        //create loading bar
        let loadingBar = this.add.graphics({
            fillStyle: {
                color: 0x00ff00
            }
        })

        this.load.on("progress", (percent)=>{
            loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50)
        })

        //when loaded
        this.load.on("complete", ()=>{
            console.log("Game Loaded")
        })
    }

    create()
    {
        //create worm animations
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('worm', {
                start: 0, end: 3
            }),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'turn',
            frames: [ { key: 'worm', frame: 4 } ],
            frameRate: 20
        })

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('worm', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        // mol animation
        this.anims.create({
            key: 'leftmol',
            frames: this.anims.generateFrameNumbers('mol', {
                start: 0, end: 3
            }),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'turnmol',
            frames: [ { key: 'mol', frame: 7 } ],
            frameRate: 20
        })

        this.anims.create({
            key: 'rightmol',
            frames: this.anims.generateFrameNumbers('mol', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        // swimmol animation
        this.anims.create({
            key: 'leftswimmole',
            frames: this.anims.generateFrameNumbers('swimmole', {
                start: 0, end: 3
            }),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'turnswimmole',
            frames: [ { key: 'swimmole', frame: 7 } ],
            frameRate: 20
        })

        this.anims.create({
            key: 'rightswimmole',
            frames: this.anims.generateFrameNumbers('swimmole', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

         //create aal animations
         this.anims.create({
            key: 'leftaal',
            frames: this.anims.generateFrameNumbers('aal', {
                start: 0, end: 3
            }),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'turnaal',
            frames: [ { key: 'aal', frame: 4 } ],
            frameRate: 20
        })

        this.anims.create({
            key: 'rightaal',
            frames: this.anims.generateFrameNumbers('aal', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        //create robot animations
        this.anims.create({
            key: 'leftrobot',
            frames: this.anims.generateFrameNumbers('robot', {
                start: 0, end: 3
            }),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'turnrobot',
            frames: [ { key: 'robot', frame: 4 } ],
            frameRate: 20
        })

        this.anims.create({
            key: 'rightrobot',
            frames: this.anims.generateFrameNumbers('robot', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        this.scene.start('menu')
    }
}