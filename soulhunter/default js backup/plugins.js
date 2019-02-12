// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Community_Basic","status":true,"description":"Basic plugin for manipulating important parameters.","parameters":{"cacheLimit":"20","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"MadeWithMv","status":true,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"false","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"SSEP_BattleSpeedUp","status":true,"description":"[ver1.51] 戦闘速度を上げるプラグインです。YanflyEngine対応。\r\n利用時は、必ずYanflyEngineの後に読み込んでください。","parameters":{"---General Setting---":"","BattleSpeed (Default)":"1","BattleSpeed (Boost)":"2","---Detail Setting---":"","StateIcon":"40","StateOverlay":"8","Weapon":"12","Motion":"12","Balloon":"12","Damage":"90","DamageMin":"60","--BattleLog Setting--":"","LogAnime BaseDelay":"8","LogAnime NextDelay":"12","LogWaitCount Default":"1","LogWaitCount Boost":"2","---YEP BattleCore---":"","YEP Battle MotionWait":"20","---YEP ATB---":"","YEP ATB BoostSwitch":"true","---ATB Speed---":"","ATB Speed(Default)":"1","ATB Speed(Boost)":"2","---YEP Victory AM---":"","YEP Victory Wait":"true"}},
{"name":"smoothscroll","status":true,"description":"Makes the map scroll smooth so it looks nicer to the eye.\n\n\t<MBS SmoothScroll>","parameters":{"Scroll Margin":"48","Scroll Speed":"2"}},
{"name":"YEP_CoreEngine","status":true,"description":"v1.31 Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"1600","Screen Height":"900","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"true","GameFont Load Timer":"0","Update Real Scale":"false","Collection Clear":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"A lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Parameters---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"false","Show Events Transition":"true","Show Events Snapshot":"true","---Map Optimization---":"","Refresh Update HP":"true","Refresh Update MP":"true","Refresh Update TP":"false","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_EventMiniLabel","status":true,"description":"v1.12 Creates miniature-sized labels over events to allow\nyou to insert whatever text you'd like in them.","parameters":{"Default Show":"true","Minimum Width":"136","Font Size":"20","X Buffer":"0","Y Buffer":"10","Battle Transition":"false"}},
{"name":"YEP_LoadCustomFonts","status":true,"description":"v1.01 Load custom fonts from the /fonts/ folder. This will\nallow you to use custom fonts without installing them.","parameters":{"Font Filenames":"cc-wild-words.ttf, ds-pixel-cyr.ttf","Font Families":"CC Wild Words, DS Pixel Cyr"}},
{"name":"YEP_IconBalloons","status":true,"description":"v1.02 Allows you to use icons for your on-map balloons\nover your characters and events!","parameters":{"Empty Filename":"EmptyBalloon"}},
{"name":"YEP_EnhancedTP","status":true,"description":"v1.09 Gives you more control over how TP is handled in\nyour game in addition to letting players switch TP modes.","parameters":{"---General---":"","Command Name":"TP Mode","Show Command":"true","Enable Command":"true","Change Reset":"true","Equipped Color":"17","Default Mode":"1","Default Unlocks":"1 2 3 4","Crisis HP":"0.25","Crisis MP":"0.25","Dead TP Gain":"false","---Mode 1 Settings---":"","Mode 1 Name":"Stoic","Mode 1 Icon":"160","Mode 1 Help Line 1":"Raise TP by guarding in battle or receiving damage","Mode 1 Help Line 2":"from attacks.","Mode 1 Max TP":"100","Mode 1 Preserve":"true","Mode 1 Initial TP":"0","Mode 1 Regen TP":"100 * user.trg","Mode 1 Take HP DMG":"(50 * value / user.mhp * user.tcr).clamp(5, 20)","Mode 1 Deal HP DMG":"0","Mode 1 Heal HP DMG":"0","Mode 1 Ally HP DMG":"0","Mode 1 Take MP DMG":"0","Mode 1 Deal MP DMG":"0","Mode 1 Heal MP DMG":"0","Mode 1 Ally MP DMG":"0","Mode 1 Deal State":"0","Mode 1 Gain State":"0","Mode 1 Kill Ally":"0","Mode 1 Kill Enemy":"0","Mode 1 Win Battle":"0","Mode 1 Flee Battle":"0","Mode 1 Lose Battle":"0","Mode 1 Crisis HP":"0","Mode 1 Crisis MP":"0","Mode 1 Only Member":"0","Mode 1 Evasion":"0","---Mode 2 Settings---":"","Mode 2 Name":"Comrade","Mode 2 Icon":"84","Mode 2 Help Line 1":"Raise TP whenever allies take damage.","Mode 2 Help Line 2":"","Mode 2 Max TP":"100","Mode 2 Preserve":"true","Mode 2 Initial TP":"0","Mode 2 Regen TP":"100 * user.trg","Mode 2 Take HP DMG":"0","Mode 2 Deal HP DMG":"0","Mode 2 Heal HP DMG":"0","Mode 2 Ally HP DMG":"20 * user.tcr","Mode 2 Take MP DMG":"0","Mode 2 Deal MP DMG":"0","Mode 2 Heal MP DMG":"0","Mode 2 Ally MP DMG":"0","Mode 2 Deal State":"0","Mode 2 Gain State":"0","Mode 2 Kill Ally":"0","Mode 2 Kill Enemy":"0","Mode 2 Win Battle":"0","Mode 2 Flee Battle":"0","Mode 2 Lose Battle":"0","Mode 2 Crisis HP":"0","Mode 2 Crisis MP":"0","Mode 2 Only Member":"0","Mode 2 Evasion":"0","---Mode 3 Settings---":"","Mode 3 Name":"Warrior","Mode 3 Icon":"77","Mode 3 Help Line 1":"Raise TP by attacking and dealing HP damage.","Mode 3 Help Line 2":"","Mode 3 Max TP":"100","Mode 3 Preserve":"true","Mode 3 Initial TP":"0","Mode 3 Regen TP":"100 * user.trg","Mode 3 Take HP DMG":"0","Mode 3 Deal HP DMG":"Math.min(16, value * 100 / target.mhp) * user.tcr","Mode 3 Heal HP DMG":"0","Mode 3 Ally HP DMG":"0","Mode 3 Take MP DMG":"0","Mode 3 Deal MP DMG":"0","Mode 3 Heal MP DMG":"0","Mode 3 Ally MP DMG":"0","Mode 3 Deal State":"0","Mode 3 Gain State":"0","Mode 3 Kill Ally":"0","Mode 3 Kill Enemy":"0","Mode 3 Win Battle":"0","Mode 3 Flee Battle":"0","Mode 3 Lose Battle":"0","Mode 3 Crisis HP":"0","Mode 3 Crisis MP":"0","Mode 3 Only Member":"0","Mode 3 Evasion":"0","---Mode 4 Settings---":"","Mode 4 Name":"Healer","Mode 4 Icon":"72","Mode 4 Help Line 1":"Raise TP by healing HP.","Mode 4 Help Line 2":"","Mode 4 Max TP":"100","Mode 4 Preserve":"true","Mode 4 Initial TP":"0","Mode 4 Regen TP":"100 * user.trg","Mode 4 Take HP DMG":"0","Mode 4 Deal HP DMG":"0","Mode 4 Heal HP DMG":"Math.min(16, value * -100 / target.mhp) * user.tcr","Mode 4 Ally HP DMG":"0","Mode 4 Take MP DMG":"0","Mode 4 Deal MP DMG":"0","Mode 4 Heal MP DMG":"0","Mode 4 Ally MP DMG":"0","Mode 4 Deal State":"0","Mode 4 Gain State":"0","Mode 4 Kill Ally":"0","Mode 4 Kill Enemy":"0","Mode 4 Win Battle":"0","Mode 4 Flee Battle":"0","Mode 4 Lose Battle":"0","Mode 4 Crisis HP":"0","Mode 4 Crisis MP":"0","Mode 4 Only Member":"0","Mode 4 Evasion":"0","---Mode 5 Settings---":"","Mode 5 Name":"Breaker","Mode 5 Icon":"174","Mode 5 Help Line 1":"Raise TP whenever user deals MP damage, receives MP damage,","Mode 5 Help Line 2":"or an ally receives MP damage.","Mode 5 Max TP":"100","Mode 5 Preserve":"true","Mode 5 Initial TP":"0","Mode 5 Regen TP":"100 * user.trg","Mode 5 Take HP DMG":"0","Mode 5 Deal HP DMG":"0","Mode 5 Heal HP DMG":"0","Mode 5 Ally HP DMG":"0","Mode 5 Take MP DMG":"50 * damageRate * user.tcr","Mode 5 Deal MP DMG":"Math.min(16, value / 4) * user.tcr","Mode 5 Heal MP DMG":"0","Mode 5 Ally MP DMG":"20 * user.tcr","Mode 5 Deal State":"0","Mode 5 Gain State":"0","Mode 5 Kill Ally":"0","Mode 5 Kill Enemy":"0","Mode 5 Win Battle":"0","Mode 5 Flee Battle":"0","Mode 5 Lose Battle":"0","Mode 5 Crisis HP":"0","Mode 5 Crisis MP":"0","Mode 5 Only Member":"0","Mode 5 Evasion":"0","---Mode 6 Settings---":"","Mode 6 Name":"Booster","Mode 6 Icon":"166","Mode 6 Help Line 1":"Raise TP whenever user recovers MP for an ally.","Mode 6 Help Line 2":"","Mode 6 Max TP":"100","Mode 6 Preserve":"true","Mode 6 Initial TP":"0","Mode 6 Regen TP":"100 * user.trg","Mode 6 Take HP DMG":"0","Mode 6 Deal HP DMG":"0","Mode 6 Heal HP DMG":"0","Mode 6 Ally HP DMG":"0","Mode 6 Take MP DMG":"0","Mode 6 Deal MP DMG":"0","Mode 6 Heal MP DMG":"Math.min(16, value / -4) * user.tcr","Mode 6 Ally MP DMG":"0","Mode 6 Deal State":"0","Mode 6 Gain State":"0","Mode 6 Kill Ally":"0","Mode 6 Kill Enemy":"0","Mode 6 Win Battle":"0","Mode 6 Flee Battle":"0","Mode 6 Lose Battle":"0","Mode 6 Crisis HP":"0","Mode 6 Crisis MP":"0","Mode 6 Only Member":"0","Mode 6 Evasion":"0","---Mode 7 Settings---":"","Mode 7 Name":"Slayer","Mode 7 Icon":"76","Mode 7 Help Line 1":"Raise TP whenever an enemy is killed.","Mode 7 Help Line 2":"","Mode 7 Max TP":"100","Mode 7 Preserve":"true","Mode 7 Initial TP":"0","Mode 7 Regen TP":"100 * user.trg","Mode 7 Take HP DMG":"0","Mode 7 Deal HP DMG":"0","Mode 7 Heal HP DMG":"0","Mode 7 Ally HP DMG":"0","Mode 7 Take MP DMG":"0","Mode 7 Deal MP DMG":"0","Mode 7 Heal MP DMG":"0","Mode 7 Ally MP DMG":"0","Mode 7 Deal State":"0","Mode 7 Gain State":"0","Mode 7 Kill Ally":"0","Mode 7 Kill Enemy":"25 * user.tcr","Mode 7 Win Battle":"0","Mode 7 Flee Battle":"0","Mode 7 Lose Battle":"0","Mode 7 Crisis HP":"0","Mode 7 Crisis MP":"0","Mode 7 Only Member":"0","Mode 7 Evasion":"0","---Mode 8 Settings---":"","Mode 8 Name":"Avenger","Mode 8 Icon":"1","Mode 8 Help Line 1":"Raise TP whenever an ally is killed.","Mode 8 Help Line 2":"","Mode 8 Max TP":"100","Mode 8 Preserve":"true","Mode 8 Initial TP":"0","Mode 8 Regen TP":"100 * user.trg","Mode 8 Take HP DMG":"0","Mode 8 Deal HP DMG":"0","Mode 8 Heal HP DMG":"0","Mode 8 Ally HP DMG":"0","Mode 8 Take MP DMG":"0","Mode 8 Deal MP DMG":"0","Mode 8 Heal MP DMG":"0","Mode 8 Ally MP DMG":"0","Mode 8 Deal State":"0","Mode 8 Gain State":"0","Mode 8 Kill Ally":"50 * user.tcr","Mode 8 Kill Enemy":"0","Mode 8 Win Battle":"0","Mode 8 Flee Battle":"0","Mode 8 Lose Battle":"0","Mode 8 Crisis HP":"0","Mode 8 Crisis MP":"0","Mode 8 Only Member":"0","Mode 8 Evasion":"0","---Mode 9 Settings---":"","Mode 9 Name":"Winner","Mode 9 Icon":"73","Mode 9 Help Line 1":"Raise TP whenever your party defeats all enemies.","Mode 9 Help Line 2":"","Mode 9 Max TP":"100","Mode 9 Preserve":"true","Mode 9 Initial TP":"0","Mode 9 Regen TP":"100 * user.trg","Mode 9 Take HP DMG":"0","Mode 9 Deal HP DMG":"0","Mode 9 Heal HP DMG":"0","Mode 9 Ally HP DMG":"0","Mode 9 Take MP DMG":"0","Mode 9 Deal MP DMG":"0","Mode 9 Heal MP DMG":"0","Mode 9 Ally MP DMG":"0","Mode 9 Deal State":"0","Mode 9 Gain State":"0","Mode 9 Kill Ally":"0","Mode 9 Kill Enemy":"0","Mode 9 Win Battle":"20 * user.tcr","Mode 9 Flee Battle":"0","Mode 9 Lose Battle":"0","Mode 9 Crisis HP":"0","Mode 9 Crisis MP":"0","Mode 9 Only Member":"0","Mode 9 Evasion":"0","---Mode 10 Settings---":"","Mode 10 Name":"Coward","Mode 10 Icon":"74","Mode 10 Help Line 1":"Raise TP whenever your party escapes from battle or","Mode 10 Help Line 2":"lose a battle.","Mode 10 Max TP":"100","Mode 10 Preserve":"true","Mode 10 Initial TP":"0","Mode 10 Regen TP":"100 * user.trg","Mode 10 Take HP DMG":"0","Mode 10 Deal HP DMG":"0","Mode 10 Heal HP DMG":"0","Mode 10 Ally HP DMG":"0","Mode 10 Take MP DMG":"0","Mode 10 Deal MP DMG":"0","Mode 10 Heal MP DMG":"0","Mode 10 Ally MP DMG":"0","Mode 10 Deal State":"0","Mode 10 Gain State":"0","Mode 10 Kill Ally":"0","Mode 10 Kill Enemy":"0","Mode 10 Win Battle":"0","Mode 10 Flee Battle":"20 * user.tcr","Mode 10 Lose Battle":"20 * user.tcr","Mode 10 Crisis HP":"0","Mode 10 Crisis MP":"0","Mode 10 Only Member":"0","Mode 10 Evasion":"0","---Mode 11 Settings---":"","Mode 11 Name":"Daredevil","Mode 11 Icon":"48","Mode 11 Help Line 1":"Raise TP whenever user ends a turn with low HP.","Mode 11 Help Line 2":"","Mode 11 Max TP":"100","Mode 11 Preserve":"true","Mode 11 Initial TP":"0","Mode 11 Regen TP":"100 * user.trg","Mode 11 Take HP DMG":"0","Mode 11 Deal HP DMG":"0","Mode 11 Heal HP DMG":"0","Mode 11 Ally HP DMG":"0","Mode 11 Take MP DMG":"0","Mode 11 Deal MP DMG":"0","Mode 11 Heal MP DMG":"0","Mode 11 Ally MP DMG":"0","Mode 11 Deal State":"0","Mode 11 Gain State":"0","Mode 11 Kill Ally":"0","Mode 11 Kill Enemy":"0","Mode 11 Win Battle":"0","Mode 11 Flee Battle":"0","Mode 11 Lose Battle":"0","Mode 11 Crisis HP":"16 * user.tcr","Mode 11 Crisis MP":"0","Mode 11 Only Member":"0","Mode 11 Evasion":"0","---Mode 12 Settings---":"","Mode 12 Name":"Caster","Mode 12 Icon":"49","Mode 12 Help Line 1":"Raise TP whenever user ends a turn with low MP.","Mode 12 Help Line 2":"","Mode 12 Max TP":"100","Mode 12 Preserve":"true","Mode 12 Initial TP":"0","Mode 12 Regen TP":"100 * user.trg","Mode 12 Take HP DMG":"0","Mode 12 Deal HP DMG":"0","Mode 12 Heal HP DMG":"0","Mode 12 Ally HP DMG":"0","Mode 12 Take MP DMG":"0","Mode 12 Deal MP DMG":"0","Mode 12 Heal MP DMG":"0","Mode 12 Ally MP DMG":"0","Mode 12 Deal State":"0","Mode 12 Gain State":"0","Mode 12 Kill Ally":"0","Mode 12 Kill Enemy":"0","Mode 12 Win Battle":"0","Mode 12 Flee Battle":"0","Mode 12 Lose Battle":"0","Mode 12 Crisis HP":"0","Mode 12 Crisis MP":"16 * user.tcr","Mode 12 Only Member":"0","Mode 12 Evasion":"0","---Mode 13 Settings---":"","Mode 13 Name":"Tactician","Mode 13 Icon":"79","Mode 13 Help Line 1":"Raise TP whenever user inflicts a status effect on a foe.","Mode 13 Help Line 2":"","Mode 13 Max TP":"100","Mode 13 Preserve":"true","Mode 13 Initial TP":"0","Mode 13 Regen TP":"100 * user.trg","Mode 13 Take HP DMG":"0","Mode 13 Deal HP DMG":"0","Mode 13 Heal HP DMG":"0","Mode 13 Ally HP DMG":"0","Mode 13 Take MP DMG":"0","Mode 13 Deal MP DMG":"0","Mode 13 Heal MP DMG":"0","Mode 13 Ally MP DMG":"0","Mode 13 Deal State":"16 * user.tcr","Mode 13 Gain State":"0","Mode 13 Kill Ally":"0","Mode 13 Kill Enemy":"0","Mode 13 Win Battle":"0","Mode 13 Flee Battle":"0","Mode 13 Lose Battle":"0","Mode 13 Crisis HP":"0","Mode 13 Crisis MP":"0","Mode 13 Only Member":"0","Mode 13 Evasion":"0","---Mode 14 Settings---":"","Mode 14 Name":"Sufferer","Mode 14 Icon":"3","Mode 14 Help Line 1":"Raise TP whenever user receives a status effect from a foe.","Mode 14 Help Line 2":"","Mode 14 Max TP":"100","Mode 14 Preserve":"true","Mode 14 Initial TP":"0","Mode 14 Regen TP":"100 * user.trg","Mode 14 Take HP DMG":"0","Mode 14 Deal HP DMG":"0","Mode 14 Heal HP DMG":"0","Mode 14 Ally HP DMG":"0","Mode 14 Take MP DMG":"0","Mode 14 Deal MP DMG":"0","Mode 14 Heal MP DMG":"0","Mode 14 Ally MP DMG":"0","Mode 14 Deal State":"0","Mode 14 Gain State":"16 * user.tcr","Mode 14 Kill Ally":"0","Mode 14 Kill Enemy":"0","Mode 14 Win Battle":"0","Mode 14 Flee Battle":"0","Mode 14 Lose Battle":"0","Mode 14 Crisis HP":"0","Mode 14 Crisis MP":"0","Mode 14 Only Member":"0","Mode 14 Evasion":"0","---Mode 15 Settings---":"","Mode 15 Name":"Dancer","Mode 15 Icon":"82","Mode 15 Help Line 1":"Raise TP whenever user successfully evades an attack.","Mode 15 Help Line 2":"","Mode 15 Max TP":"100","Mode 15 Preserve":"true","Mode 15 Initial TP":"0","Mode 15 Regen TP":"100 * user.trg","Mode 15 Take HP DMG":"0","Mode 15 Deal HP DMG":"0","Mode 15 Heal HP DMG":"0","Mode 15 Ally HP DMG":"0","Mode 15 Take MP DMG":"0","Mode 15 Deal MP DMG":"0","Mode 15 Heal MP DMG":"0","Mode 15 Ally MP DMG":"0","Mode 15 Deal State":"0","Mode 15 Gain State":"0","Mode 15 Kill Ally":"0","Mode 15 Kill Enemy":"0","Mode 15 Win Battle":"0","Mode 15 Flee Battle":"0","Mode 15 Lose Battle":"0","Mode 15 Crisis HP":"0","Mode 15 Crisis MP":"0","Mode 15 Only Member":"0","Mode 15 Evasion":"16 * user.tcr","---Mode 16 Settings---":"","Mode 16 Name":"Loner","Mode 16 Icon":"13","Mode 16 Help Line 1":"Raise TP every turn end when the user is the last","Mode 16 Help Line 2":"remaining alive member.","Mode 16 Max TP":"100","Mode 16 Preserve":"true","Mode 16 Initial TP":"0","Mode 16 Regen TP":"100 * user.trg","Mode 16 Take HP DMG":"0","Mode 16 Deal HP DMG":"0","Mode 16 Heal HP DMG":"0","Mode 16 Ally HP DMG":"0","Mode 16 Take MP DMG":"0","Mode 16 Deal MP DMG":"0","Mode 16 Heal MP DMG":"0","Mode 16 Ally MP DMG":"0","Mode 16 Deal State":"0","Mode 16 Gain State":"0","Mode 16 Kill Ally":"0","Mode 16 Kill Enemy":"0","Mode 16 Win Battle":"0","Mode 16 Flee Battle":"0","Mode 16 Lose Battle":"0","Mode 16 Crisis HP":"0","Mode 16 Crisis MP":"0","Mode 16 Only Member":"16 * user.tcr","Mode 16 Evasion":"0","---Mode 17 Settings---":"","Mode 17 Name":"Undefined","Mode 17 Icon":"0","Mode 17 Help Line 1":"-","Mode 17 Help Line 2":"-","Mode 17 Max TP":"100","Mode 17 Preserve":"true","Mode 17 Initial TP":"0","Mode 17 Regen TP":"100 * user.trg","Mode 17 Take HP DMG":"0","Mode 17 Deal HP DMG":"0","Mode 17 Heal HP DMG":"0","Mode 17 Ally HP DMG":"0","Mode 17 Take MP DMG":"0","Mode 17 Deal MP DMG":"0","Mode 17 Heal MP DMG":"0","Mode 17 Ally MP DMG":"0","Mode 17 Deal State":"0","Mode 17 Gain State":"0","Mode 17 Kill Ally":"0","Mode 17 Kill Enemy":"0","Mode 17 Win Battle":"0","Mode 17 Flee Battle":"0","Mode 17 Lose Battle":"0","Mode 17 Crisis HP":"0","Mode 17 Crisis MP":"0","Mode 17 Only Member":"0","Mode 17 Evasion":"0","---Mode 18 Settings---":"","Mode 18 Name":"Lover","Mode 18 Icon":"0","Mode 18 Help Line 1":"-","Mode 18 Help Line 2":"-","Mode 18 Max TP":"100","Mode 18 Preserve":"true","Mode 18 Initial TP":"0","Mode 18 Regen TP":"100 * user.trg","Mode 18 Take HP DMG":"0","Mode 18 Deal HP DMG":"0","Mode 18 Heal HP DMG":"0","Mode 18 Ally HP DMG":"0","Mode 18 Take MP DMG":"0","Mode 18 Deal MP DMG":"0","Mode 18 Heal MP DMG":"0","Mode 18 Ally MP DMG":"0","Mode 18 Deal State":"0","Mode 18 Gain State":"0","Mode 18 Kill Ally":"0","Mode 18 Kill Enemy":"0","Mode 18 Win Battle":"0","Mode 18 Flee Battle":"0","Mode 18 Lose Battle":"0","Mode 18 Crisis HP":"0","Mode 18 Crisis MP":"0","Mode 18 Only Member":"0","Mode 18 Evasion":"0","---Mode 19 Settings---":"","Mode 19 Name":"Undefined","Mode 19 Icon":"0","Mode 19 Help Line 1":"-","Mode 19 Help Line 2":"-","Mode 19 Max TP":"100","Mode 19 Preserve":"true","Mode 19 Initial TP":"0","Mode 19 Regen TP":"100 * user.trg","Mode 19 Take HP DMG":"0","Mode 19 Deal HP DMG":"0","Mode 19 Heal HP DMG":"0","Mode 19 Ally HP DMG":"0","Mode 19 Take MP DMG":"0","Mode 19 Deal MP DMG":"0","Mode 19 Heal MP DMG":"0","Mode 19 Ally MP DMG":"0","Mode 19 Deal State":"0","Mode 19 Gain State":"0","Mode 19 Kill Ally":"0","Mode 19 Kill Enemy":"0","Mode 19 Win Battle":"0","Mode 19 Flee Battle":"0","Mode 19 Lose Battle":"0","Mode 19 Crisis HP":"0","Mode 19 Crisis MP":"0","Mode 19 Only Member":"0","Mode 19 Evasion":"0","---Mode 20 Settings---":"","Mode 20 Name":"Undefined","Mode 20 Icon":"0","Mode 20 Help Line 1":"-","Mode 20 Help Line 2":"-","Mode 20 Max TP":"100","Mode 20 Preserve":"true","Mode 20 Initial TP":"0","Mode 20 Regen TP":"100 * user.trg","Mode 20 Take HP DMG":"0","Mode 20 Deal HP DMG":"0","Mode 20 Heal HP DMG":"0","Mode 20 Ally HP DMG":"0","Mode 20 Take MP DMG":"0","Mode 20 Deal MP DMG":"0","Mode 20 Heal MP DMG":"0","Mode 20 Ally MP DMG":"0","Mode 20 Deal State":"0","Mode 20 Gain State":"0","Mode 20 Kill Ally":"0","Mode 20 Kill Enemy":"0","Mode 20 Win Battle":"0","Mode 20 Flee Battle":"0","Mode 20 Lose Battle":"0","Mode 20 Crisis HP":"0","Mode 20 Crisis MP":"0","Mode 20 Only Member":"0","Mode 20 Evasion":"0"}},
{"name":"removeshadow","status":true,"description":"Removes the nasty shadows from your game!","parameters":{}},
{"name":"YEP_GridFreeDoodads","status":true,"description":"v1.09 Place Grid-Free Doodads into your game using an\nin-game editor. Static and animated doodads can be used!","parameters":{"---General---":"","Doodads Folder":"img/doodads/","Doodads Smoothing":"false","Alphabetical Settings":"false","---Grid Snap---":"","Default Grid Snap":"false","Grid Snap Width":"48","Grid Snap Height":"48"}}
];
