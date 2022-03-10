enum SpriteKindLegacy {
    Player,
    Projectile,
    Food,
    Enemy,
    house,
    house2,
    house3,
    house4,
    rock,
    ax,
    fat_tree
}
enum ActionKind {
    Walking,
    Idle,
    Jumping,
    walk_down,
    walk_left,
    walk_right,
    walk_up
}
namespace SpriteKind {
    export const item = SpriteKind.create()
    export const rock = SpriteKind.create()
    export const ax = SpriteKind.create()
    export const tree = SpriteKind.create()
    export const fat_tree = SpriteKind.create()
    export const house_2 = SpriteKind.create()
    export const house2 = SpriteKind.create()
    export const house3 = SpriteKind.create()
    export const house4 = SpriteKind.create()
    export const house = SpriteKind.create()
}
scene.onHitTile(SpriteKind.Player, 13, function (sprite) {
    if (ax_found == true) {
        mySprite.setPosition(250, 470)
        draw_forest()
    } else {
        game.splash("You need an AX to enter the forest")
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
        prev_pos_y = mySprite.y
        prev_pos_x = mySprite.x
        animation.setAction(mySprite, ActionKind.walk_up)
    }
})
scene.onHitTile(SpriteKind.Player, 15, function (sprite) {
    house = sprites.create(img`
        ..ffffffffffffffffffffffffffffffffffffffffffff..
        .f55dddddd555555555555555555555555555555555555f.
        f5dddffffddfffdddffffddfffddddfffddffffddfff55df
        f5dfff66ffff66ffff66ffff66ffff66ffff66ffff6ff5df
        f5df6666666666666666666666666666666666666666f5df
        f5dff88966666666666666666666666666666666698ff5df
        f55df66896666666666666666666666666666666986fd5df
        f5ddf66888888888888888888888888888888888886fd5df
        f5dff66688885555555555555555555555555588866ff5df
        f5df6666668599966666666666666666666699586669f55d
        f5df6666668599666666666666666666666699586669f55d
        f5dff66666856666666666666666666666666658666ff55f
        f5ddf66666856666666666666666666666666658666f55df
        f5ddf66666856666666666666666666666666658666f55df
        f5dff66666856666666666666666666666666658666ff5df
        f5df6666668566666666666666666666666666586669f5df
        f5df6666668566666666666666666666666666586669f5df
        f5dff666668566666666666666666666666666586669f55f
        f55df66666856666666666666666666666666658666f555f
        f5ddf66666859666666666666666666666666658666f555f
        f5dff66666885555555555555555555555555588666ff55f
        f5df6666668888888888888888888888888888886669f55f
        f5df6666668666666666666666666666666666986669f55f
        f5dff66668866666666666666666666666666668666ff5df
        f5ddf66688966666666666666666666666666699866f55df
        f5ddf66689966666666666666666666666666669866f55df
        f5dff66899666666666666666666666666666669886ff5df
        f5df6668966666666666666666666666666666699869f5df
        f5df6686666666666666666666666666666666666869f55f
        f5dff88666666666666666666666666666666666688ff55f
        f5ddf66666666666666666666666666666666666668fd55f
        f55df666666666666fffffffffffff6666666666666fd55f
        f55df6ffff66ffffffdddddddddddffffff66ffff66fd55f
        ff55fffddffffddff5555555555555ff55ffffddffff55ff
        fff5555d5555555f555555555555555f5555555555555fff
        f5fff5555555555f55fffffffffff55f55555555555fff5f
        f555ffffffffffff55ffd555555ff55fffffffffffff555f
        f55555555555555f5dfddd555555f55f555555555555555f
        f55555ddddddd55f5df555555555f55f55ddddddd555555f
        f55555fffffff55f5df555555555f55f55fffffff555555f
        f55555f4f4f4f55f5df555555555f55f55f4f4f4f555555f
        f55555f4f4f4f55f5df555555ff5f55f55f4f4f4f5555ddf
        f55555fffffff5df5df5555555f5f55f55fffffff555ddff
        fff55555555555df5dff5555555ff55f5555555555dddff.
        ..fff5555555dddf5dff555555dff55f5555555555dfff..
        ....ffffffffffff5dff55555ddff55fffffffffffff....
        ...............f5dfffffffffff55f................
        ...............ffff.........ffff................
        `, SpriteKind.house)
    house4 = sprites.create(img`
        ..ffffffffffffffffffffffffffffffffffffffffffff..
        .f55dddddd555555555555555555555555555555555555f.
        f5dddffffddfffdddffffddfffddddfffddffffddfff55df
        f5dfff22ffff22ffff22ffff22ffff22ffff22ffff2ff5df
        f5df2222222222222222222222222222222222222222f5df
        f5dff88322222222222222222222222222222222238ff5df
        f55df22832222222222222222222222222222222382fd5df
        f5ddf22888888888888888888888888888888888882fd5df
        f5dff22288885555555555555555555555555588822ff5df
        f5df2222228533322222222222222222222233582223f55d
        f5df2222228533222222222222222222222233582223f55d
        f5dff22222852222222222222222222222222258222ff55f
        f5ddf22222852222222222222222222222222258222f55df
        f5ddf22222852222222222222222222222222258222f55df
        f5dff22222852222222222222222222222222258222ff5df
        f5df2222228522222222222222222222222222582223f5df
        f5df2222228522222222222222222222222222582223f5df
        f5dff222228522222222222222222222222222582223f55f
        f55df22222852222222222222222222222222258222f555f
        f5ddf22222853222222222222222222222222258222f555f
        f5dff22222885555555555555555555555555588222ff55f
        f5df2222228888888888888888888888888888882223f55f
        f5df2222228222222222222222222222222222382223f55f
        f5dff22228822222222222222222222222222228222ff5df
        f5ddf22288322222222222222222222222222233822f55df
        f5ddf22283322222222222222222222222222223822f55df
        f5dff22833222222222222222222222222222223882ff5df
        f5df2228322222222222222222222222222222233823f5df
        f5df2282222222222222222222222222222222222823f55f
        f5dff88222222222222222222222222222222222288ff55f
        f5ddf22222222222222222222222222222222222228fd55f
        f55df222222222222fffffffffffff2222222222222fd55f
        f55df2ffff22ffffffdddddddddddffffff22ffff22fd55f
        ff55fffddffffddff5555555555555ff55ffffddffff55ff
        fff5555d5555555f555555555555555f5555555555555fff
        f5fff5555555555f55fffffffffff55f55555555555fff5f
        f555ffffffffffff55ffd555555ff55fffffffffffff555f
        f55555555555555f5dfddd555555f55f555555555555555f
        f55555ddddddd55f5df555555555f55f55ddddddd555555f
        f55555fffffff55f5df555555555f55f55fffffff555555f
        f55555f4f4f4f55f5df555555555f55f55f4f4f4f555555f
        f55555f4f4f4f55f5df555555ff5f55f55f4f4f4f5555ddf
        f55555fffffff5df5df5555555f5f55f55fffffff555ddff
        fff55555555555df5dff5555555ff55f5555555555dddff.
        ..fff5555555dddf5dff555555dff55f5555555555dfff..
        ....ffffffffffff5dff55555ddff55fffffffffffff....
        ...............f5dfffffffffff55f................
        ...............ffff.........ffff................
        `, SpriteKind.house4)
    house3 = sprites.create(img`
        ..ffffffffffffffffffffffffffffffffffffffffffff..
        .feeddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.
        fedddffffddfffdddffffddfffddddfffddffffddfffeedf
        fedfff66ffff66ffff66ffff66ffff66ffff66ffff6ffedf
        fedf6666666666666666666666666666666666666666fedf
        fedff88966666666666666666666666666666666698ffedf
        feedf66896666666666666666666666666666666986fdedf
        feddf66888888888888888888888888888888888886fdedf
        fedff6668888eeeeeeeeeeeeeeeeeeeeeeeeee88866ffedf
        fedf6666668e99966666666666666666666699e86669feed
        fedf6666668e99666666666666666666666699e86669feed
        fedff666668e66666666666666666666666666e8666ffeef
        feddf666668e66666666666666666666666666e8666feedf
        feddf666668e66666666666666666666666666e8666feedf
        fedff666668e66666666666666666666666666e8666ffedf
        fedf6666668e66666666666666666666666666e86669fedf
        fedf6666668e66666666666666666666666666e86669fedf
        fedff666668e66666666666666666666666666e86669feef
        feedf666668e66666666666666666666666666e8666feeef
        feddf666668e96666666666666666666666666e8666feeef
        fedff6666688eeeeeeeeeeeeeeeeeeeeeeeeee88666ffeef
        fedf6666668888888888888888888888888888886669feef
        fedf6666668666666666666666666666666666986669feef
        fedff66668866666666666666666666666666668666ffedf
        feddf66688966666666666666666666666666699866feedf
        feddf66689966666666666666666666666666669866feedf
        fedff66899666666666666666666666666666669886ffedf
        fedf6668966666666666666666666666666666699869fedf
        fedf6686666666666666666666666666666666666869feef
        fedff88666666666666666666666666666666666688ffeef
        feddf66666666666666666666666666666666666668fdeef
        feedf666666666666fffffffffffff6666666666666fdeef
        feedf6ffff66ffffffdddddddddddffffff66ffff66fdeef
        ffeefffddffffddffeeeeeeeeeeeeeffeeffffddffffeeff
        fffeeeedeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefff
        fefffeeeeeeeeeefeefffffffffffeefeeeeeeeeeeefffef
        feeeffffffffffffeeffdeeeeeeffeefffffffffffffeeef
        feeeeeeeeeeeeeefedfdddeeeeeefeefeeeeeeeeeeeeeeef
        feeeeedddddddeefedfeeeeeeeeefeefeedddddddeeeeeef
        feeeeefffffffeefedfeeeeeeeeefeefeefffffffeeeeeef
        feeeeefefefefeefedfeeeeeeeeefeefeefefefefeeeeeef
        feeeeefefefefeefedfeeeeeeffefeefeefefefefeeeeddf
        feeeeefffffffedfedfeeeeeeefefeefeefffffffeeeddff
        fffeeeeeeeeeeedfedffeeeeeeeffeefeeeeeeeeeedddff.
        ..fffeeeeeeedddfedffeeeeeedffeefeeeeeeeeeedfff..
        ....ffffffffffffedffeeeeeddffeefffffffffffff....
        ...............fedfffffffffffeef................
        ...............ffff.........ffff................
        `, SpriteKind.house3)
    house2 = sprites.create(img`
        ..ffffffffffffffffffffffffffffffffffffffffffff..
        .feeddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.
        fedddffffddfffdddffffddfffddddfffddffffddfffeedf
        fedfff66ffff66ffff66ffff66ffff66ffff66ffff6ffedf
        fedf6666666666666666666666666666666666666666fedf
        fedff88966666666666666666666666666666666698ffedf
        feedf66896666666666666666666666666666666986fdedf
        feddf66888888888888888888888888888888888886fdedf
        fedff6668888eeeeeeeeeeeeeeeeeeeeeeeeee88866ffedf
        fedf6666668e99966666666666666666666699e86669feed
        fedf6666668e99666666666666666666666699e86669feed
        fedff666668e66666666666666666666666666e8666ffeef
        feddf666668e66666666666666666666666666e8666feedf
        feddf666668e66666666666666666666666666e8666feedf
        fedff666668e66666666666666666666666666e8666ffedf
        fedf6666668e66666666666666666666666666e86669fedf
        fedf6666668e66666666666666666666666666e86669fedf
        fedff666668e66666666666666666666666666e86669feef
        feedf666668e66666666666666666666666666e8666feeef
        feddf666668e96666666666666666666666666e8666feeef
        fedff6666688eeeeeeeeeeeeeeeeeeeeeeeeee88666ffeef
        fedf6666668888888888888888888888888888886669feef
        fedf6666668666666666666666666666666666986669feef
        fedff66668866666666666666666666666666668666ffedf
        feddf66688966666666666666666666666666699866feedf
        feddf66689966666666666666666666666666669866feedf
        fedff66899666666666666666666666666666669886ffedf
        fedf6668966666666666666666666666666666699869fedf
        fedf6686666666666666666666666666666666666869feef
        fedff88666666666666666666666666666666666688ffeef
        feddf66666666666666666666666666666666666668fdeef
        feedf666666666666fffffffffffff6666666666666fdeef
        feedf6ffff66ffffffdddddddddddffffff66ffff66fdeef
        ffeefffddffffddffeeeeeeeeeeeeeffeeffffddffffeeff
        fffeeeedeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefff
        fefffeeeeeeeeeefeefffffffffffeefeeeeeeeeeeefffef
        feeeffffffffffffeeffdeeeeeeffeefffffffffffffeeef
        feeeeeeeeeeeeeefedfdddeeeeeefeefeeeeeeeeeeeeeeef
        feeeeedddddddeefedfeeeeeeeeefeefeedddddddeeeeeef
        feeeeefffffffeefedfeeeeeeeeefeefeefffffffeeeeeef
        feeeeefefefefeefedfeeeeeeeeefeefeefefefefeeeeeef
        feeeeefefefefeefedfeeeeeeffefeefeefefefefeeeeddf
        feeeeefffffffedfedfeeeeeeefefeefeefffffffeeeddff
        fffeeeeeeeeeeedfedffeeeeeeeffeefeeeeeeeeeedddff.
        ..fffeeeeeeedddfedffeeeeeedffeefeeeeeeeeeedfff..
        ....ffffffffffffedffeeeeeddffeefffffffffffff....
        ...............fedfffffffffffeef................
        ...............ffff.........ffff................
        `, SpriteKind.house2)
    ax2 = sprites.create(img`
        . . . . . . . c c . . . . . . . 
        . . . . c c c 6 5 c 6 6 . . . . 
        . . . . c 6 c 5 5 c 7 6 . . . . 
        . . . 6 c c 7 5 5 7 c 6 6 . . . 
        . . c c 7 7 7 7 7 5 7 7 c 6 . . 
        . 6 6 6 c 6 7 7 7 7 6 c c 6 6 . 
        c 7 7 7 6 c 7 c 6 7 6 7 7 7 7 6 
        c c c 6 6 6 c 6 6 6 6 7 7 6 6 6 
        . c c 7 6 6 6 6 6 7 7 7 7 c 6 . 
        . c 7 7 6 6 7 6 6 7 7 6 7 7 c . 
        . c c c c 7 7 6 f 7 7 c c c c . 
        . . . . c 7 c f f c 7 c . . . . 
        . . . . . 6 f e e e c . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e . e e . e e . . . . 
        . . . . . . . e e . . . . . . . 
        `, SpriteKind.ax)
    draw_map()
    mySprite.setPosition(275, 10)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.house2, function (sprite, otherSprite) {
    house_num = 2
    mySprite_y_pos = mySprite.y
    mySprite_x_pos = mySprite.x
    if (controller.up.isPressed()) {
        enter_house()
    } else {
        mySprite.setPosition(prev_pos_x, prev_pos_y)
    }
    entered_house_2 = 1
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setTileMap(img`
        . . . . . . . . . . 
        . 6 . a . c . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        `)
    if (ax_found == true) {
        scene.setTile(6, img`
            . . . . . 8 . . . . . . . . . . 
            . . . . 8 8 . . . . . . . . . . 
            . . . 8 8 d . . . . . . . . . . 
            . . 8 8 d d d d d d d . . . . . 
            . 8 8 d d d d d d d d d . . . . 
            . 8 8 d d d d d d d d d . . . . 
            . 8 8 d d d d d d d d . . . . . 
            . . 8 8 d d d 5 . . . . . . . . 
            . . . 8 8 d 5 5 . . . . . . . . 
            . . . . 8 8 5 5 . . . . . . . . 
            . . . . . 8 5 5 . . . . . . . . 
            . . . . . . 5 5 . . . . . . . . 
            . . . . . . 5 5 . . . . . . . . 
            . . . . . . 5 5 . . . . . . . . 
            . . . . . . 5 5 . . . . . . . . 
            . . . . . . 5 5 . . . . . . . . 
            `, false)
    } else {
        scene.setTile(6, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, false)
        scene.setTile(10, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, false)
        scene.setTile(12, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, false)
    }
    link_b_y = mySprite.y
    link_b_x = mySprite.x
})
function draw_map () {
    loc_house = false
    loc_village = true
    loc_forest = false
    scene.setTileMap(img`
        2222222222222222222222222222222222222222222222222222222222222222
        2................5...........7.2...........222222222222........2
        2.............7..5..9.9.9......2...........227777777722........2
        2.777....7.......5.............2.....7.....227777777722........2
        2.777......a..7..5..9.9.9...9..2..7........227777777722..77....2
        2.777............5.............2.......7...227777777722..77....2
        2......55555555555...........7.2....7......227777777722..777...2
        2......5............7...7......2....7......227777777722...77...2
        2......5........9..............2...........227777777722...77...2
        2..7...5..777..................2.......7...222227222222...77...2
        2....7.5..777.................55555........222227222222........2
        2......5..777......777........52..5.............5..............2
        2......5...........777...7....52..5.............5..............2
        2.7.9..5.......7...777........52..5...........555.........9....2
        2......5......................52..5555555555555................2
        2.....75......................52...............................2
        2.777..5555555555555555555555552...............................2
        2.777......555555.5...........52...............................2
        2.777.............5.....7.....52..................7........7...2
        2........9........5...........555555555555555........9.........2
        2................555.7...777...2............5..................2
        2......5555555555535.....777.7.2............5..................2
        2.....55...9.....555..9..777...2..........666666........9......2
        27...75.......777.5............2.........66666666..............2
        2....55...7...777.5...7......9.2.........66666666..............2
        2.7..5........777.5............2.........66666666..7...........2
        2...55............55555555555552.........66666666.......7......2
        2..55...777..7.......7........52...77.....666666...........9...2
        2.55....777.............777...52...7777........................2
        255..7..777...9...7.....777...52....777.............9..........2
        2.......................777...52....77.........................2
        22222222222222222222222222222252...............................2
        2.............................5..........................7.....2
        2......2.....555555555555555555................................2
        2............5.............................9......7............2
        2............5.................................................2
        2............5......7........7.......................9.........2
        2...7........5.................................................2
        2............5........................9......................662
        2............5..............................................6662
        2.......9.9.9.9.9......9...........7.......................66662
        2...7.........................................9...........666662
        2.......777.9.9.9..................................7.....6666662
        2.......7.7.........7.......9...........................66666662
        2.......9.9.9.9........................................666666662
        2..................................7......7...........6666666662
        2..7....9.9.9.7.......................................6666666662
        2...............9.....................................6666666662
        2...........9..........7...........9............7.....6666666662
        2.............9.9...........7.........................6666666662
        2.......7...9.............................9........7...666666662
        2.............9........................................666666662
        2666........9...................................666...6666666662
        2666..........9................................66666666666666662
        266666......9.....7................7...........66666666666666662
        26666666......9..............9................666666666666666662
        2666666666....................................666666666666666662
        2666666666....................................666666666696666662
        26666666666..................................6666666666666666662
        2666666666666.........7.....................66666666666666666662
        26666666666666..................7......6666666666666666666666662
        2666666666666666.......................6666666666666666666666662
        2666666666666666.......................6666666666666666666666662
        2222222222222222222222222222222222222222222222222222222222222222
        `)
    scene.setTile(2, img`
        b b b b b c c c c c c c c c c b 
        b b b b b b b b b b b b b b b b 
        b c c c c c c c c c c c b b b b 
        b c c c c c c c c c c c b b b b 
        b c c c c c c c c c c c b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b c c c c c c c c c c b b 
        b b b b c c c c c c c c c c b b 
        b b b b c c c c c c c c c c b b 
        b b b b b b b b b b b b b b b b 
        b c c c c c c c c c c c b b b b 
        b c c c c c c c c c c c b b b b 
        b c c c c c c c c c c c b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b c c c c c c c c c c c b 
        b b b b c c c c c c c c c c c b 
        `, true)
    scene.setTile(9, img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `, false)
    scene.setTile(7, img`
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 2 2 3 3 3 3 2 2 3 3 3 3 3 3 
        3 3 2 2 2 3 3 2 2 2 3 3 3 2 3 3 
        3 3 3 2 2 3 2 2 2 3 3 3 3 3 3 3 
        3 3 3 3 2 3 3 2 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 2 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 2 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 2 e 3 3 3 3 2 2 3 3 3 
        3 3 3 3 3 2 2 2 3 3 2 2 2 3 3 3 
        3 3 3 3 3 3 2 2 2 2 2 2 e 3 3 3 
        3 3 3 3 3 3 3 2 2 3 2 2 3 3 3 3 
        2 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 2 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        `, false)
    scene.setTile(3, img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f f 8 8 4 4 f f . . . . . 
        . . f f a a a c a 4 4 f f . . . 
        . f f 8 4 4 6 b a 6 c 4 f . . . 
        . f 8 c 6 6 b 6 f a 6 c f f . . 
        . f 8 a a f b b b a 6 c 4 f . . 
        . f 8 a a f f b a f 6 6 4 f . . 
        . f 8 a 6 b b a f f 6 c 8 f . . 
        . f 8 a 4 b b a f a 4 4 8 f . . 
        . . f 8 a a 6 b b c 4 8 8 f . . 
        . . f f 8 c c 4 c 4 4 8 f f . . 
        . . . f 8 8 8 8 8 8 8 f f . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, true)
    scene.setTile(5, img`
        . . 9 9 9 9 . . . . 9 9 9 9 . . 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        9 9 9 9 9 9 9 9 9 9 9 9 5 9 9 9 
        9 9 9 9 9 9 5 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 5 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . 9 9 9 5 9 9 4 4 9 9 9 9 9 9 . 
        . 9 9 9 9 9 4 4 4 4 9 9 9 9 9 . 
        . 9 9 9 9 9 4 4 4 4 9 9 9 9 9 . 
        . 9 9 9 9 9 9 4 4 9 9 9 9 9 9 . 
        9 9 9 9 5 9 9 9 9 9 9 5 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 5 9 9 9 9 9 5 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        . . 9 9 9 9 . . . . 9 9 9 9 . . 
        `, false)
    scene.setTile(13, img`
        c 5 5 2 2 2 2 2 2 2 2 2 2 5 5 c 
        c c 5 2 2 2 2 d d 2 d 2 2 5 c c 
        5 c 5 2 2 d 2 2 2 2 d 2 2 5 c 5 
        c 5 5 2 2 2 2 2 2 2 2 2 2 5 c 5 
        c c 5 2 d 2 2 2 d 2 2 2 2 5 5 c 
        c c 5 2 d 2 2 2 2 2 2 2 2 5 c c 
        c 5 5 2 2 2 d 2 2 d 2 2 2 5 c c 
        c c 5 2 2 2 2 2 2 2 2 2 5 5 5 c 
        c c 5 2 2 2 2 d 2 2 d 2 5 c c c 
        5 5 2 2 2 d 2 2 2 2 2 2 5 c c 5 
        c 5 2 2 2 2 2 2 2 2 2 2 5 5 c 5 
        c 5 2 2 d 2 d 2 d 2 2 2 2 5 c c 
        c 5 2 2 2 2 2 2 2 2 2 2 2 5 c c 
        c 5 5 2 d 2 2 2 d 2 d 2 2 5 c 5 
        c c 5 2 2 2 2 2 2 2 2 2 2 5 5 c 
        c c 5 2 2 2 2 2 2 2 2 2 5 5 c c 
        `, true)
    scene.setTile(1, img`
        . . . . . f f f f f f . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f f f 4 4 4 4 4 4 4 f f f . 
        . . f 5 f 4 4 4 4 4 4 4 f 5 f . 
        . . f 5 f 4 4 4 4 4 4 4 f 5 f . 
        . . f 5 f 4 4 4 4 4 4 4 f 5 f . 
        . . f 5 f 5 f 5 f 5 f 5 f 5 f . 
        . . f 5 f 5 f 5 f 5 f 5 f 5 f . 
        . . f 5 f 5 f 5 f 5 f 5 f f f . 
        . . f 5 f 5 f 5 f 5 f 5 f f f . 
        . . f 5 f 5 f 5 f 5 f 5 f 5 f . 
        . . f 5 f 5 f 5 f 5 f 5 f 5 f . 
        . . f 5 f 5 f 5 f 5 f 5 f 5 f . 
        . . f 5 f 5 f 5 f 5 f 5 f 5 f . 
        . . f f f f f f f f f f f f f . 
        . . . . . . . . . . . . . . . . 
        `, true)
    scene.setTile(10, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, true)
    scene.setTile(6, img`
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 8 6 6 6 6 6 8 6 6 6 
        6 6 8 6 6 6 6 6 6 6 6 6 8 8 6 6 
        6 6 8 8 8 8 8 6 6 6 6 6 6 8 8 6 
        6 6 6 6 6 8 8 8 8 6 6 6 6 6 6 6 
        6 6 8 6 6 6 6 6 8 8 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 8 8 8 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 8 6 6 6 6 
        6 8 8 8 6 6 8 6 6 6 6 8 8 8 6 6 
        6 6 6 8 8 6 6 6 6 6 6 6 6 8 6 6 
        6 6 6 6 8 8 6 6 6 8 6 6 6 6 6 6 
        6 6 6 6 6 8 8 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 8 8 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 8 8 6 6 6 6 8 6 6 
        6 6 6 8 6 6 6 6 8 8 8 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        `, true)
    house.setPosition(225, 250)
    house2.setPosition(400, 400)
    house3.setPosition(220, 400)
    house4.setPosition(400, 200)
    ax2.setPosition(300, 100)
    if (ax_found == true) {
        ax2.destroy()
    }
    spawn_trees()
}
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    if (true) {
        animation.setAction(mySprite, ActionKind.Idle)
    }
})
function spawn_trees () {
    for (let value of scene.getTilesByType(9)) {
        fat_tree2 = sprites.create(img`
            ...........fff.fffffff..........
            .........fff1fff11111ffff.......
            ......ffff11111111111111fff.....
            ....ff11111331133331111111ff....
            ....f1111333333333333311111ff...
            ...f111113333311111133111111f...
            ...f111333333114441113313311ff..
            ..ff1113333331444444131133311f..
            ..f11133333133144411333113311ff.
            ..f111333331133111113331133111ff
            ..f1113333311133333333311331111f
            ..f1113333311113333331111331111f
            ..f111133331111111111111133111ff
            ..ff11133333111111111111133111f.
            ...f11113333311111111111333111f.
            ...ff111113333311111111333311ff.
            .fffff1111133333333333333311ff5f
            ff555f1111133333333333333111f555
            f5555ff11111333333333311111ff5ff
            fff555f1111111333333111111fffff.
            ..fffffff1111111111111111ff5f...
            .....ff5fff1111111111111ff55ff..
            ....ff5555ffff1111111ffff5555f..
            ...ff55555555ffffffff55555555f..
            ..ff5544555555555555555555555ff.
            ..f554445555554444455555554455f.
            ..f5544455ff5544444555fff55455f.
            ..f54455ff.ff55444455ff.ff55555f
            .ff5555ff...ff554455ff...fff555f
            .f555fff.....ff5555f.......fff5f
            .fffff........ff55f..........fff
            ...............ffff.............
            `, SpriteKind.fat_tree)
        value.place(fat_tree2)
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
        prev_pos_x = mySprite.x
        prev_pos_y = mySprite.y
        animation.setAction(mySprite, ActionKind.walk_left)
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (true) {
        animation.setAction(mySprite, ActionKind.Idle)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fat_tree, function (sprite, otherSprite) {
    mySprite.setPosition(prev_pos_x, prev_pos_y)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (true) {
        animation.setAction(mySprite, ActionKind.Idle)
    }
})
function enter_house () {
    loc_house = true
    loc_forest = false
    loc_village = false
    mySprite.setPosition(80, 100)
    scene.setTileMap(img`
        9 9 9 9 9 9 9 9 9 9 
        9 5 5 5 5 5 5 5 5 9 
        9 5 5 5 5 5 5 5 5 9 
        9 5 5 5 5 5 5 5 5 9 
        9 5 5 5 5 5 5 5 5 9 
        9 5 5 5 5 5 5 5 5 9 
        9 5 5 5 5 5 5 5 5 9 
        9 9 9 9 1 1 9 9 9 9 
        `)
    scene.setTile(5, img`
        9 9 5 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 5 5 5 5 5 5 5 5 5 5 5 5 5 
        9 9 9 5 5 5 5 5 5 5 5 5 5 5 5 5 
        9 9 9 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `, false)
    scene.setTile(9, img`
        c c c c c c c c c c c c c c c c 
        a a a a c a a a a a a c a a a a 
        a a a a c a a a a a a c a a a a 
        a a a a c a a a a a a c a a a a 
        c c c c c c c c c c c c c c c c 
        c a a a a a a c a a a a a a a a 
        c a a a a a a c a a a a a a a a 
        c a a a a a a c a a a a a a a a 
        c c c c c c c c c c c c c c c c 
        a a a a c a a a a a a c a a a a 
        a a a a c a a a a a a c a a a a 
        a a a a c a a a a a a c a a a a 
        c c c c c c c c c c c c c c c c 
        c a a a a a a c a a a a a a a a 
        c a a a a a a c a a a a a a a a 
        c a a a a a a c a a a a a a a a 
        `, false)
    scene.setTile(1, img`
        . . . . . f f f f f f . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f f f 4 4 4 4 4 4 4 f f f . 
        . . f 5 f 4 4 4 4 4 4 4 f 5 f . 
        . . f 5 f 4 4 4 4 4 4 4 f 5 f . 
        . . f 5 f 4 4 4 4 4 4 4 f 5 f . 
        . . f 5 f 5 f 5 f 5 f 5 f 5 f . 
        . . f 5 f 5 f 5 f 5 f 5 f 5 f . 
        . . f 5 f 5 f 5 f 5 f 5 9 9 f . 
        . . f 5 f 5 f 5 f 5 f 5 9 9 f . 
        . . f 5 f 5 f 5 f 5 f 5 f 5 f . 
        . . f 5 f 5 f 5 f 5 f 5 f 5 f . 
        . . f 5 f 5 f 5 f 5 f 5 f 5 f . 
        . . f 5 f 5 f 5 f 5 f 5 f 5 f . 
        . . f f f f f f f f f f f f f . 
        . . . . . . . . . . . . . . . . 
        `, true)
    if (house_num == 1) {
        if (donut_qty == 0 && entered_house != 1) {
            mySprite2 = sprites.create(img`
                . . . . . . 6 6 1 . . . . . . . 
                . . . . . 6 6 1 1 1 . . . . . . 
                . . . . 6 6 1 1 1 1 1 . . . . . 
                . . . 6 2 1 1 1 1 1 2 1 . . . . 
                . . . 1 1 2 2 2 2 2 1 1 . . . . 
                . . . 1 1 2 2 6 2 2 1 1 . . . . 
                . . . 1 1 2 6 6 6 2 1 1 . . . . 
                . . . 1 1 2 6 6 6 2 1 1 . . . . 
                . . . 1 1 2 6 6 6 2 1 1 . . . . 
                . . . 1 1 2 6 6 6 2 1 1 . . . . 
                . . . 1 1 2 2 6 2 2 1 1 . . . . 
                . . . 1 1 2 2 2 2 2 1 1 . . . . 
                . . . 6 2 1 1 1 1 1 2 1 . . . . 
                . . . . 6 1 1 1 1 1 1 . . . . . 
                . . . . . 6 1 1 1 1 . . . . . . 
                . . . . . . 6 1 1 . . . . . . . 
                `, SpriteKind.Food)
            mySprite2.setPosition(randint(25, 100), randint(25, 100))
            donut_qty += 1
            info.changeScoreBy(5)
        }
    }
    if (house_num == 2) {
        if (donut_qty == 0 && entered_house_2 != 1) {
            mySprite2 = sprites.create(img`
                . . . . . . 6 6 1 . . . . . . . 
                . . . . . 6 6 1 1 1 . . . . . . 
                . . . . 6 6 1 1 1 1 1 . . . . . 
                . . . 6 2 1 1 1 1 1 2 1 . . . . 
                . . . 1 1 2 2 2 2 2 1 1 . . . . 
                . . . 1 1 2 2 6 2 2 1 1 . . . . 
                . . . 1 1 2 6 6 6 2 1 1 . . . . 
                . . . 1 1 2 6 6 6 2 1 1 . . . . 
                . . . 1 1 2 6 6 6 2 1 1 . . . . 
                . . . 1 1 2 6 6 6 2 1 1 . . . . 
                . . . 1 1 2 2 6 2 2 1 1 . . . . 
                . . . 1 1 2 2 2 2 2 1 1 . . . . 
                . . . 6 2 1 1 1 1 1 2 1 . . . . 
                . . . . 6 1 1 1 1 1 1 . . . . . 
                . . . . . 6 1 1 1 1 . . . . . . 
                . . . . . . 6 1 1 . . . . . . . 
                `, SpriteKind.Food)
            mySprite2.setPosition(randint(25, 100), randint(25, 100))
            donut_qty += 1
            info.changeScoreBy(5)
        }
    }
    if (house_num == 3) {
        if (donut_qty == 0 && entered_house_3 != 1) {
            mySprite2 = sprites.create(img`
                . . . . . . 6 6 1 . . . . . . . 
                . . . . . 6 6 1 1 1 . . . . . . 
                . . . . 6 6 1 1 1 1 1 . . . . . 
                . . . 6 2 1 1 1 1 1 2 1 . . . . 
                . . . 1 1 2 2 2 2 2 1 1 . . . . 
                . . . 1 1 2 2 6 2 2 1 1 . . . . 
                . . . 1 1 2 6 6 6 2 1 1 . . . . 
                . . . 1 1 2 6 6 6 2 1 1 . . . . 
                . . . 1 1 2 6 6 6 2 1 1 . . . . 
                . . . 1 1 2 6 6 6 2 1 1 . . . . 
                . . . 1 1 2 2 6 2 2 1 1 . . . . 
                . . . 1 1 2 2 2 2 2 1 1 . . . . 
                . . . 6 2 1 1 1 1 1 2 1 . . . . 
                . . . . 6 1 1 1 1 1 1 . . . . . 
                . . . . . 6 1 1 1 1 . . . . . . 
                . . . . . . 6 1 1 . . . . . . . 
                `, SpriteKind.Food)
            mySprite2.setPosition(randint(25, 100), randint(25, 100))
            donut_qty += 1
            info.changeScoreBy(5)
        }
    }
    if (house_num == 4) {
        if (donut_qty == 0 && entered_house_4 != 1) {
            mySprite2 = sprites.create(img`
                . . . . . . 6 6 1 . . . . . . . 
                . . . . . 6 6 1 1 1 . . . . . . 
                . . . . 6 6 1 1 1 1 1 . . . . . 
                . . . 6 2 1 1 1 1 1 2 1 . . . . 
                . . . 1 1 2 2 2 2 2 1 1 . . . . 
                . . . 1 1 2 2 6 2 2 1 1 . . . . 
                . . . 1 1 2 6 6 6 2 1 1 . . . . 
                . . . 1 1 2 6 6 6 2 1 1 . . . . 
                . . . 1 1 2 6 6 6 2 1 1 . . . . 
                . . . 1 1 2 6 6 6 2 1 1 . . . . 
                . . . 1 1 2 2 6 2 2 1 1 . . . . 
                . . . 1 1 2 2 2 2 2 1 1 . . . . 
                . . . 6 2 1 1 1 1 1 2 1 . . . . 
                . . . . 6 1 1 1 1 1 1 . . . . . 
                . . . . . 6 1 1 1 1 . . . . . . 
                . . . . . . 6 1 1 . . . . . . . 
                `, SpriteKind.Food)
            mySprite2.setPosition(randint(25, 100), randint(25, 100))
            donut_qty += 1
            info.changeScoreBy(5)
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.house, function (sprite, otherSprite) {
    house_num = 1
    mySprite_y_pos = mySprite.y
    mySprite_x_pos = mySprite.x
    if (controller.up.isPressed()) {
        enter_house()
    } else {
        mySprite.setPosition(prev_pos_x, prev_pos_y)
    }
    entered_house = 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.house3, function (sprite, otherSprite) {
    house_num = 3
    mySprite_y_pos = mySprite.y
    mySprite_x_pos = mySprite.x
    if (controller.up.isPressed()) {
        enter_house()
    } else {
        mySprite.setPosition(prev_pos_x, prev_pos_y)
    }
    entered_house_3 = 1
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
        prev_pos_y = mySprite.y
        prev_pos_x = mySprite.x
        animation.setAction(mySprite, ActionKind.walk_right)
    }
})
function splashscreen () {
    scene.setBackgroundImage(img`
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222222222222222222222222222222fffff22222222222222222222222222222222222222222222222222222222222222222222222222222222222
        22222222222222222222222222222222222222222222222222222222222222222222222ffffffff222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222fffffffffff2222222222222222222222222222222222222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222222222222222222222222222ffffffffffff2222222222222222222222222222222222222222222222222222222222222222222222222222222
        22222222222222222222222222222222222222222222222222222222222222222222fffff4444fffff222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222ffffff44444fffff22222222222222222222222222222222222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222222222222222222222222ffffff4444444fffffff22222222222222222222222222222222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222222222222222222222222fffff444444444fffffff2222222222222222222222222222222222222222222222222222222222222222222222222
        22222222222222222222222222222222222222222222222222222222222222222fffff44444444444fffffff222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222fffff44444444444444fffffff2222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222fffff4444444444444444fffffff22222222222222222222222222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222222222222222222225fffff444444444444444444fffffff2222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222ffffff44444444444444444444fffffff222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222225fffff444444444444444444444444fffff22222222222222222222222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222222222222222222fffff4444444444444444444444444fffffff222222222222222222222222222222222222222222222222222222222222222
        22222222222222222222222222222222222222222222222222222222222fffff444444444444444444444444444fffffff22222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222fffff444444444444444444444444444444fffffff222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222225fffff44444444444444444444444444444444ffffff22222222222222222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222222222222222fffff444444444444444444444444444444444ffffffff222222222222222222222222222222222222222222222222222222222
        22222222222222222222222222222222222222222222222222222222fffff444444444444444444444444444444444444fffffff22222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222fffff444444444444444444444444444444444444444ffffff2222222222222222222222222222222222222222222222222222222
        22222222222222222222222222222222222222222222222222222ffffff444444444444444444444444444444444444444447fffff222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222ffffff4444444444444444444444444444444444444444444fffffff2222222222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222222222ffffff4444444444444444444444444444444444444444444444fffff2222222222222222222222222222222222222222222222222222
        22222222222222222222222222222222222222222222222222ffffff44444444444444444444444444444444444444444444444ffffff222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222fffff444444444444444444444444444444444444444444444444444fffff22222222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222222ffffff44444444444444444444444444444444444444444444444fffffffff22222222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222222222
        22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44ffffff22222222222222222222222222222222222222222222222
        22222222222222222222222222222222222222222222ffffff4fffff222222222222222222222222222222222222222ffffffff44444ffffff2222222222222222222222222222222222222222222222
        22222222222222222222222222222222222222222222fffff44ffffff2222222222222222222222222222222222222fffffff44444444ffffff222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222fffff4444ffffff2222222222222222222222222222222222fffffff444444444444ffffff2222222222222222222222222222222222222222222
        22222222222222222222222222222222222222222ffffff4444444fffff22222222222222222222222222222222ffffff444444444444444ffffff222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222ffffff444444444ffff222222222222222222222222222222fffffff44444444444444444fffffff2222222222222222222222222222222222222222
        2222222222222222222222222222222222222222ffffff4444444444fffff222222222222222222222222222ffffff444444444444444444444fffffff22222222222222222222222222222222222222
        22222222222222222222222222222222222222ffffff444444444444ffffff22222222222222222222222222fffff44444444444444444444444fffffff2222222222222222222222222222222222222
        2222222222222222222222222222222222222ffffff44444444444444fffff2222222222222222222222222ffff444444444444444444444444444ffffff222222222222222222222222222222222222
        222222222222222222222222222222222222ffffff44444444444444444fffff2222222222222222222222fffff4444444444444444444444444444ffffff22222222222222222222222222222222222
        222222222222222222222222222222222222fffff444444444444444444ffffff222222222222222222222ffff4444444444444444444444444444447fffff2222222222222222222222222222222222
        2222222222222222222222222222222222ffffff44444444444444444444fffff22222222222222222222fffff4444444444444444444444444444444fffff2222222222222222222222222222222222
        222222222222222222222222222222222ffffff4444444444444444444444fffff222222222222222222fffff4444444444444444444444444444444444ffff222222222222222222222222222222222
        22222222222222222222222222222222ffffff444444444444444444444444fffff2222222222222222fffff44444444444444444444444444444444444fffff22222222222222222222222222222222
        2222222222222222222222222222222fffff444444444444444444444444444ffff222222222222225fffff4444444444444444444444444444444444444ffff22222222222222222222222222222222
        222222222222222222222222222222fffff44444444444444444444444444444ffff2222222222225ffffff4444444444444444444444444444444444444fffff2222222222222222222222222222222
        22222222222222222222222222222ffffff44444444444444444444444444444ffff222222222222ffffff444444444444444444444444444444444444444ffff2222222222222222222222222222222
        2222222222222222222222222222ffffff4444444444444444444444444444444ffff2222222222ffffff4444444444444444444444444444444444444444fffff222222222222222222222222222222
        222222222222222222222222222fffff444444444444444444444444444444444fffff22222222ffffff444444444444444444444444444444444444444444ffff222222222222222222222222222222
        222222222222222222222222222fffff4444444444444444444444444444444444fffff22222ffffff444444444444444444444444444444444444444444444ffff22222222222222222222222222222
        22222222222222222222222222ffff4444444444444444444444444444444444444ffff22222fffff4444444444444444444444444444444444444444444444fffff2222222222222222222222222222
        22222222222222222222222222ffff4444444444444444444444444444444444444fffff222ffffff4444444444444444444444444444444444444444444444fffff2222222222222222222222222222
        222222222222222222222222fffff444444444444444444444444444444444444444ffff2ffffff4444444444444444444444444444444444444444444444444fffff222222222222222222222222222
        222222222222222222222222fffff444444444444444444444444444444444444444ffffffffff444444444444444444444444444444444444444444444444444fffff22222222222222222222222222
        222222222222222222222222ffff44444444444444444444444444444444444444444ffffffff44444444444444444444444444444444444444444444444444444ffffff222222222222222222222222
        22222222222222222222222ffff4444444444444444444444444444444444444444444ffffff444444444444444444444444444444444444444444444444444444ffffffff2222222222222222222222
        22222222222222222222222ffff4444444444444444444444444444444444444444444fffff444444444444444444444444444444444444444444444444444444444fffffff222222222222222222222
        22222222222222222222222ffffffffffffffffffffffff44444444444444444444444fffff4444444444444444444444444444444444444444444444444444ffffffffffff222222222222222222222
        22222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222
        22222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222
        222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        `)
    game.showLongText("Explore the world. Gather items. Find the treasure", DialogLayout.Bottom)
}
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    if (true) {
        animation.setAction(mySprite, ActionKind.Idle)
    }
})
function draw_forest () {
    loc_house = false
    loc_village = false
    loc_forest = true
    scene.setTileMap(img`
        22222222222222222222222222222222
        2..............848.............2
        2..............848.............2
        2..............448.............2
        2..............848.............2
        2..............848.............2
        2..............848.............2
        2...........888848.............2
        2...........844448.............2
        2...........848888.............2
        2...........848888.............2
        2...........844448.............2
        2...........888848.............2
        2.............8848.............2
        2.............884888888888888882
        2.............88999999999999999a
        2.............899998888888888882
        2.....88888888898888...........2
        2............e898..............2
        2....888888888898..............2
        2.............898..............2
        2.............898..............2
        2.............898..............2
        2.............898..............2
        2.............898..............2
        2.............898..............2
        2.............898..............2
        2.............898..............2
        2.............898..............2
        2.............898..............2
        2.............898..............2
        222222222222222f2222222222222222
        `)
    scene.setTile(8, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . c c c c 6 . . . . . 
        . . . . c c 6 7 7 5 5 6 6 . . . 
        . . c c 6 6 6 6 7 5 5 7 c c . . 
        . c 6 6 6 7 7 7 7 7 7 5 6 c c . 
        . c 6 6 7 7 7 5 7 6 7 7 7 6 c c 
        c 6 6 7 7 6 7 7 7 6 7 7 6 6 6 c 
        c c 6 6 6 7 6 7 6 6 6 6 5 7 6 c 
        c c c c 6 7 7 6 7 7 7 6 7 6 6 c 
        . c c 6 6 6 6 c 6 6 6 6 6 c c c 
        . c c 6 6 c 6 6 c 6 c 6 6 c c . 
        . . c c f f 6 6 c f f c c f . . 
        . . . . c f c c c f c f f . . . 
        . . . . . 4 f f f c . e . . . . 
        . . . . . . e e e . . 4 . . . . 
        . . . . . . . e e . e . . . . . 
        `, true)
    scene.setTile(10, img`
        3 3 3 3 3 3 3 2 2 3 3 2 3 3 3 2 
        2 2 2 3 3 2 3 3 3 3 3 3 3 2 3 3 
        d d 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        b b d d d d d d d d d d d d d d 
        d b b b b b d d b c c b b b b b 
        d d b b b c d d b b d d d d d d 
        d b d d d b c b b d d d d d d d 
        c b d d d d c d c c c d d d d d 
        c d d d d d d c c d d c d d d d 
        d c c c c c c c d d d c c c c c 
        d b b d d d b b b b b d d d d c 
        b b b d d d d d d d d b b b b b 
        2 2 2 d d d d d d d d d 2 2 2 2 
        3 3 2 2 2 2 2 2 2 2 2 2 2 3 3 2 
        2 3 3 3 3 2 2 3 3 3 3 2 2 3 3 3 
        2 3 2 2 3 3 3 3 2 2 3 3 3 3 2 2 
        `, false)
    scene.setTile(4, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . c c c c 6 . . . . . 
        . . . . c c 6 7 7 5 5 6 6 . . . 
        . . c c 6 6 6 6 7 5 5 7 c c . . 
        . c 6 6 6 7 7 7 7 7 7 5 6 c c . 
        . c 6 6 7 7 7 5 7 2 7 7 7 6 c c 
        c 6 6 7 7 6 7 7 7 6 7 7 6 2 6 c 
        c c 6 6 2 7 6 7 6 6 6 6 5 7 6 c 
        c c c c 6 7 7 6 7 7 7 6 7 6 6 c 
        . c c 6 6 2 6 c 6 6 6 2 6 c c c 
        . c c 6 6 c 6 6 c 6 c 6 6 c c . 
        . . c c f f 6 6 c f f c c f . . 
        . . . . c f c c c f c f f . . . 
        . . . . . 4 f f f c . e . . . . 
        . . . . . . e e e . . 4 . . . . 
        . . . . . . . e e . e . . . . . 
        `, false)
    scene.setTile(15, img`
        6 7 7 e e e e e e e e e e 7 7 6 
        6 6 7 e e e e d d e d e e 7 6 6 
        7 6 7 e e d e e e e d e e 7 6 7 
        6 7 7 e e e e e e e e e e 7 6 7 
        6 6 7 e d e e e d e e e e 7 7 6 
        6 6 7 e d e e e e e e e e 7 6 6 
        6 7 7 e e e d e e d e e e 7 6 6 
        6 6 7 e e e e e e e e e 7 7 7 6 
        6 6 7 e e e e d e e d e 7 6 6 6 
        7 7 e e e d e e e e e e 7 6 6 7 
        6 7 e e e e e e e e e e 7 7 6 7 
        6 7 e e d e d e d e e e e 7 6 6 
        6 7 e e e e e e e e e e e 7 6 6 
        6 7 7 e d e e e d e d e e 7 6 7 
        6 6 7 e e e e e e e e e e 7 7 6 
        6 6 7 e e e e e e e e e 7 7 6 6 
        `, true)
    scene.setTile(14, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . f f f e e e e e e e e f f f . 
        . f e 4 4 4 4 4 e 4 4 4 4 5 f . 
        . f f 4 4 e 4 4 4 4 4 4 e f f . 
        . f e f f f f f f f f f f e f . 
        . f 5 e f e e e e e e f f 5 f . 
        . f 4 e f e 5 5 5 5 e f e 4 f . 
        . f 4 5 f e 5 5 5 5 e f 5 4 f . 
        . f f 5 f e 5 5 5 5 e f 5 f f . 
        . . f f f e e e e e e f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, true)
    house.destroy()
    house2.destroy()
    house3.destroy()
    house4.destroy()
    fat_tree2.destroy()
    ax2.destroy()
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
        prev_pos_y = mySprite.y
        prev_pos_x = mySprite.x
        animation.setAction(mySprite, ActionKind.walk_down)
    }
})
scene.onHitTile(SpriteKind.Player, 3, function (sprite) {
    mySprite.say("Follow the path to the great north", 2000)
})
info.onLifeZero(function () {
	
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.x = link_b_x
    mySprite.y = link_b_y
    if (loc_village == true) {
        draw_map()
    } else if (loc_forest == true) {
        draw_forest()
    } else {
        enter_house()
    }
})
scene.onHitTile(SpriteKind.Player, 14, function (sprite) {
    game.over(true)
    effects.hearts.endScreenEffect()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    mySprite2.destroy(effects.confetti, 500)
    donut_qty += -1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ax, function (sprite, otherSprite) {
    game.splash("You found an AX")
    ax_found = true
    ax2.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.house4, function (sprite, otherSprite) {
    house_num = 4
    mySprite_y_pos = mySprite.y
    mySprite_x_pos = mySprite.x
    if (controller.up.isPressed()) {
        enter_house()
    } else {
        mySprite.setPosition(prev_pos_x, prev_pos_y)
    }
    entered_house_4 = 1
})
scene.onHitTile(SpriteKind.Player, 1, function (sprite) {
    mySprite.setPosition(mySprite_x_pos, mySprite_y_pos)
    mySprite.x = mySprite_x_pos
    mySprite.y = mySprite_y_pos
    draw_map()
})
let entered_house_4 = 0
let entered_house_3 = 0
let mySprite2: Sprite = null
let entered_house = 0
let fat_tree2: Sprite = null
let loc_forest = false
let loc_village = false
let loc_house = false
let link_b_x = 0
let link_b_y = 0
let entered_house_2 = 0
let mySprite_x_pos = 0
let mySprite_y_pos = 0
let house_num = 0
let prev_pos_x = 0
let prev_pos_y = 0
let donut_qty = 0
let ax_found = false
let ax2: Sprite = null
let house2: Sprite = null
let house3: Sprite = null
let house4: Sprite = null
let house: Sprite = null
let mySprite: Sprite = null
splashscreen()
info.setScore(0)
scene.cameraShake(4, 1000)
scene.setBackgroundImage(img`
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    `)
mySprite = sprites.create(img`
    . . . . . f f f f f . . . . . . 
    . . . . f 2 9 9 2 2 f . . . . . 
    . . . f f 2 f f 2 2 2 f f . . . 
    . . f 9 f f 9 9 9 9 2 f 9 f . . 
    . . f 9 f 9 f f f f 5 f 9 f . . 
    . . f 9 f f f f f f f f 9 f . . 
    . . f 2 2 f f f f f f 2 2 f . . 
    . . . f 9 9 f 9 9 f 9 9 f . . . 
    . . . f 2 9 f 9 9 f 9 2 f . . . 
    . . f 2 f 2 9 9 9 9 2 f 2 f . . 
    . f 9 2 f f f f f f f f 2 f . . 
    . f 9 f f 2 2 2 2 f 9 9 2 f . . 
    . . f f 2 9 9 9 9 f 9 9 f . . . 
    . . . f f f f 2 2 2 f f . . . . 
    . . f f 2 9 9 f f f f f f . . . 
    . . . f f f f f f f f f . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(295, 315)
house = sprites.create(img`
    ..ffffffffffffffffffffffffffffffffffffffffffff..
    .f55dddddd555555555555555555555555555555555555f.
    f5dddffffddfffdddffffddfffddddfffddffffddfff55df
    f5dfff66ffff66ffff66ffff66ffff66ffff66ffff6ff5df
    f5df6666666666666666666666666666666666666666f5df
    f5dff88966666666666666666666666666666666698ff5df
    f55df66896666666666666666666666666666666986fd5df
    f5ddf66888888888888888888888888888888888886fd5df
    f5dff66688885555555555555555555555555588866ff5df
    f5df6666668599966666666666666666666699586669f55d
    f5df6666668599666666666666666666666699586669f55d
    f5dff66666856666666666666666666666666658666ff55f
    f5ddf66666856666666666666666666666666658666f55df
    f5ddf66666856666666666666666666666666658666f55df
    f5dff66666856666666666666666666666666658666ff5df
    f5df6666668566666666666666666666666666586669f5df
    f5df6666668566666666666666666666666666586669f5df
    f5dff666668566666666666666666666666666586669f55f
    f55df66666856666666666666666666666666658666f555f
    f5ddf66666859666666666666666666666666658666f555f
    f5dff66666885555555555555555555555555588666ff55f
    f5df6666668888888888888888888888888888886669f55f
    f5df6666668666666666666666666666666666986669f55f
    f5dff66668866666666666666666666666666668666ff5df
    f5ddf66688966666666666666666666666666699866f55df
    f5ddf66689966666666666666666666666666669866f55df
    f5dff66899666666666666666666666666666669886ff5df
    f5df6668966666666666666666666666666666699869f5df
    f5df6686666666666666666666666666666666666869f55f
    f5dff88666666666666666666666666666666666688ff55f
    f5ddf66666666666666666666666666666666666668fd55f
    f55df666666666666fffffffffffff6666666666666fd55f
    f55df6ffff66ffffffdddddddddddffffff66ffff66fd55f
    ff55fffddffffddff5555555555555ff55ffffddffff55ff
    fff5555d5555555f555555555555555f5555555555555fff
    f5fff5555555555f55fffffffffff55f55555555555fff5f
    f555ffffffffffff55ffd555555ff55fffffffffffff555f
    f55555555555555f5dfddd555555f55f555555555555555f
    f55555ddddddd55f5df555555555f55f55ddddddd555555f
    f55555fffffff55f5df555555555f55f55fffffff555555f
    f55555f4f4f4f55f5df555555555f55f55f4f4f4f555555f
    f55555f4f4f4f55f5df555555ff5f55f55f4f4f4f5555ddf
    f55555fffffff5df5df5555555f5f55f55fffffff555ddff
    fff55555555555df5dff5555555ff55f5555555555dddff.
    ..fff5555555dddf5dff555555dff55f5555555555dfff..
    ....ffffffffffff5dff55555ddff55fffffffffffff....
    ...............f5dfffffffffff55f................
    ...............ffff.........ffff................
    `, SpriteKind.house)
house4 = sprites.create(img`
    ..ffffffffffffffffffffffffffffffffffffffffffff..
    .f55dddddd555555555555555555555555555555555555f.
    f5dddffffddfffdddffffddfffddddfffddffffddfff55df
    f5dfffeeffffeeffffeeffffeeffffeeffffeeffffeff5df
    f5dfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef5df
    f5dff889eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee98ff5df
    f55dfee89eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee98efd5df
    f5ddfee88888888888888888888888888888888888efd5df
    f5dffeee888855555555555555555555555555888eeff5df
    f5dfeeeeee85999eeeeeeeeeeeeeeeeeeeee9958eee9f55d
    f5dfeeeeee8599eeeeeeeeeeeeeeeeeeeeee9958eee9f55d
    f5dffeeeee85eeeeeeeeeeeeeeeeeeeeeeeeee58eeeff55f
    f5ddfeeeee85eeeeeeeeeeeeeeeeeeeeeeeeee58eeef55df
    f5ddfeeeee85eeeeeeeeeeeeeeeeeeeeeeeeee58eeef55df
    f5dffeeeee85eeeeeeeeeeeeeeeeeeeeeeeeee58eeeff5df
    f5dfeeeeee85eeeeeeeeeeeeeeeeeeeeeeeeee58eee9f5df
    f5dfeeeeee85eeeeeeeeeeeeeeeeeeeeeeeeee58eee9f5df
    f5dffeeeee85eeeeeeeeeeeeeeeeeeeeeeeeee58eee9f55f
    f55dfeeeee85eeeeeeeeeeeeeeeeeeeeeeeeee58eeef555f
    f5ddfeeeee859eeeeeeeeeeeeeeeeeeeeeeeee58eeef555f
    f5dffeeeee885555555555555555555555555588eeeff55f
    f5dfeeeeee888888888888888888888888888888eee9f55f
    f5dfeeeeee8eeeeeeeeeeeeeeeeeeeeeeeeeee98eee9f55f
    f5dffeeee88eeeeeeeeeeeeeeeeeeeeeeeeeeee8eeeff5df
    f5ddfeee889eeeeeeeeeeeeeeeeeeeeeeeeeee998eef55df
    f5ddfeee899eeeeeeeeeeeeeeeeeeeeeeeeeeee98eef55df
    f5dffee899eeeeeeeeeeeeeeeeeeeeeeeeeeeee988eff5df
    f5dfeee89eeeeeeeeeeeeeeeeeeeeeeeeeeeeee998e9f5df
    f5dfee8eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee8e9f55f
    f5dff88eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee88ff55f
    f5ddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee8fd55f
    f55dfeeeeeeeeeeeefffffffffffffeeeeeeeeeeeeefd55f
    f55dfeffffeeffffffdddddddddddffffffeeffffeefd55f
    ff55fffddffffddff5555555555555ff55ffffddffff55ff
    fff5555d5555555f555555555555555f5555555555555fff
    f5fff5555555555f55fffffffffff55f55555555555fff5f
    f555ffffffffffff55ffd555555ff55fffffffffffff555f
    f55555555555555f5dfddd555555f55f555555555555555f
    f55555ddddddd55f5df555555555f55f55ddddddd555555f
    f55555fffffff55f5df555555555f55f55fffffff555555f
    f55555f4f4f4f55f5df555555555f55f55f4f4f4f555555f
    f55555f4f4f4f55f5df555555ff5f55f55f4f4f4f5555ddf
    f55555fffffff5df5df5555555f5f55f55fffffff555ddff
    fff55555555555df5dff5555555ff55f5555555555dddff.
    ..fff5555555dddf5dff555555dff55f5555555555dfff..
    ....ffffffffffff5dff55555ddff55fffffffffffff....
    ...............f5dfffffffffff55f................
    ...............ffff.........ffff................
    `, SpriteKind.house4)
house3 = sprites.create(img`
    ..ffffffffffffffffffffffffffffffffffffffffffff..
    .f55dddddd555555555555555555555555555555555555f.
    f5dddffffddfffdddffffddfffddddfffddffffddfff55df
    f5dfffaaffffaaffffaaffffaaffffaaffffaaffffaff5df
    f5dfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaf5df
    f5dff889aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa98ff5df
    f55dfaa89aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa98afd5df
    f5ddfaa88888888888888888888888888888888888afd5df
    f5dffaaa888855555555555555555555555555888aaff5df
    f5dfaaaaaa85999aaaaaaaaaaaaaaaaaaaaa9958aaa9f55d
    f5dfaaaaaa8599aaaaaaaaaaaaaaaaaaaaaa9958aaa9f55d
    f5dffaaaaa85aaaaaaaaaaaaaaaaaaaaaaaaaa58aaaff55f
    f5ddfaaaaa85aaaaaaaaaaaaaaaaaaaaaaaaaa58aaaf55df
    f5ddfaaaaa85aaaaaaaaaaaaaaaaaaaaaaaaaa58aaaf55df
    f5dffaaaaa85aaaaaaaaaaaaaaaaaaaaaaaaaa58aaaff5df
    f5dfaaaaaa85aaaaaaaaaaaaaaaaaaaaaaaaaa58aaa9f5df
    f5dfaaaaaa85aaaaaaaaaaaaaaaaaaaaaaaaaa58aaa9f5df
    f5dffaaaaa85aaaaaaaaaaaaaaaaaaaaaaaaaa58aaa9f55f
    f55dfaaaaa85aaaaaaaaaaaaaaaaaaaaaaaaaa58aaaf555f
    f5ddfaaaaa859aaaaaaaaaaaaaaaaaaaaaaaaa58aaaf555f
    f5dffaaaaa885555555555555555555555555588aaaff55f
    f5dfaaaaaa888888888888888888888888888888aaa9f55f
    f5dfaaaaaa8aaaaaaaaaaaaaaaaaaaaaaaaaaa98aaa9f55f
    f5dffaaaa88aaaaaaaaaaaaaaaaaaaaaaaaaaaa8aaaff5df
    f5ddfaaa889aaaaaaaaaaaaaaaaaaaaaaaaaaa998aaf55df
    f5ddfaaa899aaaaaaaaaaaaaaaaaaaaaaaaaaaa98aaf55df
    f5dffaa899aaaaaaaaaaaaaaaaaaaaaaaaaaaaa988aff5df
    f5dfaaa89aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa998a9f5df
    f5dfaa8aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa8a9f55f
    f5dff88aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa88ff55f
    f5ddfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa8fd55f
    f55dfaaaaaaaaaaaafffffffffffffaaaaaaaaaaaaafd55f
    f55dfaffffaaffffffdddddddddddffffffaaffffaafd55f
    ff55fffddffffddff5555555555555ff55ffffddffff55ff
    fff5555d5555555f555555555555555f5555555555555fff
    f5fff5555555555f55fffffffffff55f55555555555fff5f
    f555ffffffffffff55ffd555555ff55fffffffffffff555f
    f55555555555555f5dfddd555555f55f555555555555555f
    f55555ddddddd55f5df555555555f55f55ddddddd555555f
    f55555fffffff55f5df555555555f55f55fffffff555555f
    f55555f4f4f4f55f5df555555555f55f55f4f4f4f555555f
    f55555f4f4f4f55f5df555555ff5f55f55f4f4f4f5555ddf
    f55555fffffff5df5df5555555f5f55f55fffffff555ddff
    fff55555555555df5dff5555555ff55f5555555555dddff.
    ..fff5555555dddf5dff555555dff55f5555555555dfff..
    ....ffffffffffff5dff55555ddff55fffffffffffff....
    ...............f5dfffffffffff55f................
    ...............ffff.........ffff................
    `, SpriteKind.house3)
house2 = sprites.create(img`
    ..ffffffffffffffffffffffffffffffffffffffffffff..
    .f55dddddd555555555555555555555555555555555555f.
    f5dddffffddfffdddffffddfffddddfffddffffddfff55df
    f5dfff22ffff22ffff22ffff22ffff22ffff22ffff2ff5df
    f5df2222222222222222222222222222222222222222f5df
    f5dff88922222222222222222222222222222222298ff5df
    f55df22892222222222222222222222222222222982fd5df
    f5ddf22888888888888888888888888888888888882fd5df
    f5dff22288885555555555555555555555555588822ff5df
    f5df2222228599922222222222222222222299582229f55d
    f5df2222228599222222222222222222222299582229f55d
    f5dff22222852222222222222222222222222258222ff55f
    f5ddf22222852222222222222222222222222258222f55df
    f5ddf22222852222222222222222222222222258222f55df
    f5dff22222852222222222222222222222222258222ff5df
    f5df2222228522222222222222222222222222582229f5df
    f5df2222228522222222222222222222222222582229f5df
    f5dff222228522222222222222222222222222582229f55f
    f55df22222852222222222222222222222222258222f555f
    f5ddf22222859222222222222222222222222258222f555f
    f5dff22222885555555555555555555555555588222ff55f
    f5df2222228888888888888888888888888888882229f55f
    f5df2222228222222222222222222222222222982229f55f
    f5dff22228822222222222222222222222222228222ff5df
    f5ddf22288922222222222222222222222222299822f55df
    f5ddf22289922222222222222222222222222229822f55df
    f5dff22899222222222222222222222222222229882ff5df
    f5df2228922222222222222222222222222222299829f5df
    f5df2282222222222222222222222222222222222829f55f
    f5dff88222222222222222222222222222222222288ff55f
    f5ddf22222222222222222222222222222222222228fd55f
    f55df222222222222fffffffffffff2222222222222fd55f
    f55df2ffff22ffffffdddddddddddffffff22ffff22fd55f
    ff55fffddffffddff5555555555555ff55ffffddffff55ff
    fff5555d5555555f555555555555555f5555555555555fff
    f5fff5555555555f55fffffffffff55f55555555555fff5f
    f555ffffffffffff55ffd555555ff55fffffffffffff555f
    f55555555555555f5dfddd555555f55f555555555555555f
    f55555ddddddd55f5df555555555f55f55ddddddd555555f
    f55555fffffff55f5df555555555f55f55fffffff555555f
    f55555f4f4f4f55f5df555555555f55f55f4f4f4f555555f
    f55555f4f4f4f55f5df555555ff5f55f55f4f4f4f5555ddf
    f55555fffffff5df5df5555555f5f55f55fffffff555ddff
    fff55555555555df5dff5555555ff55f5555555555dddff.
    ..fff5555555dddf5dff555555dff55f5555555555dfff..
    ....ffffffffffff5dff55555ddff55fffffffffffff....
    ...............f5dfffffffffff55f................
    ...............ffff.........ffff................
    `, SpriteKind.house2)
ax2 = sprites.create(img`
    . . . . . 8 . . . . . . . . . . 
    . . . . 8 8 . . . . . . . . . . 
    . . . 8 8 d . . . . . . . . . . 
    . . 8 8 d d d d d d d . . . . . 
    . 8 8 d d d d d d d d d . . . . 
    . 8 8 d d d d d d d d d . . . . 
    . 8 8 d d d d d d d d . . . . . 
    . . 8 8 d d d 5 . . . . . . . . 
    . . . 8 8 d 5 5 . . . . . . . . 
    . . . . 8 8 5 5 . . . . . . . . 
    . . . . . 8 5 5 . . . . . . . . 
    . . . . . . 5 5 . . . . . . . . 
    . . . . . . 5 5 . . . . . . . . 
    . . . . . . 5 5 . . . . . . . . 
    . . . . . . 5 5 . . . . . . . . 
    . . . . . . 5 5 . . . . . . . . 
    `, SpriteKind.ax)
ax_found = false
house.setPosition(225, 250)
house2.setPosition(400, 400)
house3.setPosition(220, 400)
house4.setPosition(400, 200)
ax2.setPosition(300, 100)
controller.moveSprite(mySprite)
let anim = animation.createAnimation(ActionKind.walk_down, 200)
animation.attachAnimation(mySprite, anim)
anim.addAnimationFrame(img`
    . . . . . f f f f f . . . . . . 
    . . . . f 2 9 9 2 2 f . . . . . 
    . . . f f 2 f f 2 2 2 f f . . . 
    . . f 9 f f 9 9 9 9 2 f 9 f . . 
    . . f 9 f 9 f f f f 9 f 9 f . . 
    . . f 9 f f f f f f f f 9 f . . 
    . . f 2 2 f f f f f f 2 2 f . . 
    . . . f 9 9 f 9 9 f 9 9 f . . . 
    . . . f 2 9 f 9 9 f 9 2 f . . . 
    . . f 2 f 2 9 9 9 9 2 f 2 f . . 
    . f 9 2 f f f f f f f f 2 f . . 
    . f 9 f f 2 2 2 2 f 9 9 2 f . . 
    . . f f 2 9 9 9 9 f 9 9 f . . . 
    . . . f f f f 2 2 2 f f . . . . 
    . . f f 2 9 9 f f f f f f . . . 
    . . . f f f f f f f f f . . . . 
    `)
anim.addAnimationFrame(img`
    . . . . . f f f f f . . . . . . 
    . . . . f 2 2 9 9 2 f . . . . . 
    . . f f 2 2 2 f f 2 f f . . . . 
    . f 9 f 2 9 9 9 9 f f 9 f . . . 
    . f 9 f 9 f f f f 9 f 9 f . . . 
    . f 9 f f f f f f f f 9 f . . . 
    . f 2 2 f f f f f f 2 2 f . . . 
    . . f 9 9 f 9 9 f 9 9 f . . . . 
    . . f 2 9 f 9 9 f 9 2 f . . . . 
    . f 2 f 2 9 9 9 9 2 f 2 f . . . 
    . f 2 f f f f f f f f 2 9 f . . 
    . f 2 9 9 f 2 2 2 2 f f 9 f . . 
    . . f 9 9 f 9 9 9 9 2 f f . . . 
    . . . f f 2 2 2 f f f f . . . . 
    . . f f f f f f 9 9 2 f f . . . 
    . . . f f f f f f f f f . . . . 
    `)
anim = animation.createAnimation(ActionKind.walk_up, 200)
animation.attachAnimation(mySprite, anim)
anim.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . f 9 9 9 9 f . . . . . . 
    . . f f 9 f f f f 9 f f . . . . 
    . f 9 f f 2 9 9 2 f f 9 f . . . 
    . f 9 f 2 2 9 9 2 2 f 9 f . . . 
    . f 9 f 2 f 2 9 2 2 f 9 f . . . 
    . f 2 f f 2 2 9 2 2 f 2 f . . . 
    . . f f f 2 2 2 2 f f f . . . . 
    . . f 2 f 2 2 2 f 2 f 2 f . . . 
    . f 9 2 f 2 2 f 2 2 f 2 f . . . 
    . f 9 f 2 f f 2 2 9 2 f f . . . 
    . . f 2 9 9 9 9 9 2 2 f . . . . 
    . . f f 2 2 2 2 2 f f f . . . . 
    . . f f f f f f f 9 9 f f . . . 
    . . . f f f f f f f f f . . . . 
    `)
anim.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . f 9 9 9 9 f . . . . . . 
    . . f f 9 f f f f 9 f f . . . . 
    . f 9 f f 3 9 9 3 f f 9 f . . . 
    . f 9 f 3 3 9 9 3 3 f 9 f . . . 
    . f 9 f 3 3 9 3 f 3 f 9 f . . . 
    . f 3 f 3 3 9 3 3 f f 3 f . . . 
    . . f f f 3 3 3 3 f f f . . . . 
    . f 3 f 3 f 3 3 3 f 3 f . . . . 
    . f 3 f 3 3 f 3 3 f 3 9 f . . . 
    . f f 3 9 3 3 f f 3 f 9 f . . . 
    . . f 3 3 9 9 9 9 9 3 f . . . . 
    . . f f f 3 3 3 3 3 f f . . . . 
    . f f 9 9 f f f f f f f . . . . 
    . . f f f f f f f f f . . . . . 
    `)
anim = animation.createAnimation(ActionKind.walk_left, 200)
animation.attachAnimation(mySprite, anim)
anim.addAnimationFrame(img`
    . . . . . . f f f f f . . . . . 
    . . . . f f 2 9 2 2 2 f . . . . 
    . . . f 9 9 f 2 9 9 2 2 f . . . 
    . f f f 2 9 9 f 2 2 f 2 2 f . . 
    . . f f f 2 9 9 f f 9 f 2 2 f . 
    . . . . f f f 9 f 2 9 f 2 2 f . 
    . . f f 9 f 9 f f 9 9 f 2 f . . 
    . . f 9 9 f 9 9 f 9 9 f f . . . 
    . . . f 2 9 9 9 f 9 2 f . . . . 
    . . . . f 2 2 2 f 2 f f . . . . 
    . . . . f f f f f f 2 f . . . . 
    . . . . f 2 f 9 9 f 2 2 f . . . 
    . . . . f 9 f 9 9 f 2 2 f . . . 
    . . . . f 2 f f f f f f f . . . 
    . . . . f f f 9 9 9 9 f . . . . 
    . . . f f f f f f f f f f . . . 
    `)
anim.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . f . f f 2 9 9 2 2 2 f f . . . 
    . f f 9 9 f 2 2 9 9 2 2 2 f . . 
    . f f 2 9 9 f 2 2 f 2 2 2 f . . 
    . . f f 2 9 9 f f 9 f 2 2 f . . 
    . . . f f f 2 f 2 9 f 2 f . . . 
    . f f 9 f 9 f f 9 9 f 2 f . . . 
    . f 9 9 f 9 9 f 9 9 f f . . . . 
    . . f 2 9 9 9 f 9 2 f . . . . . 
    . . . f f f f f f f f . . . . . 
    . . . . f 9 9 f 2 2 f f . . . . 
    . . . . f 9 9 f 2 2 f 9 f . . . 
    . . . f f f f 2 2 f f 9 f . . . 
    . . f 9 9 9 9 f f f 9 9 f . . . 
    . . f f f f f f f f f f f f . . 
    `)
anim = animation.createAnimation(ActionKind.walk_right, 200)
animation.attachAnimation(mySprite, anim)
anim.addAnimationFrame(img`
    . . . . . f f f f f . . . . . . 
    . . . . f 2 2 2 9 2 f f . . . . 
    . . . f 2 2 9 9 2 f 9 9 f . . . 
    . . f 2 2 f 2 2 f 9 9 2 f f f . 
    . f 2 2 f 9 f f 9 9 2 f f f . . 
    . f 2 2 f 9 2 f 2 f f f . . . . 
    . . f 2 f 9 9 f f 9 f 9 f f . . 
    . . . f f 9 9 f 9 9 f 9 9 f . . 
    . . . . f 2 9 f 9 9 9 2 f . . . 
    . . . . f f 2 f 2 2 2 f . . . . 
    . . . . f 2 f f f f f f . . . . 
    . . . f 2 2 f 9 9 f 2 f . . . . 
    . . . f 2 2 f 9 9 f 9 f . . . . 
    . . . f f f f f f f 2 f . . . . 
    . . . . f 9 9 9 9 f f f . . . . 
    . . . f f f f f f f f f f . . . 
    `)
anim.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . f f 2 2 2 9 9 2 f f . f . 
    . . f 2 2 2 2 9 9 2 f 9 9 f f . 
    . . f 2 2 2 f 2 2 f 9 9 2 f f . 
    . . f 2 2 f 9 f f 9 9 2 f f . . 
    . . . f 2 f 9 2 f 2 f f f . . . 
    . . . f 2 f 9 9 f f 9 f 9 f f . 
    . . . . f f 9 9 f 9 9 f 9 9 f . 
    . . . . . f 2 9 f 9 9 9 2 f . . 
    . . . . . f f f f f f f f . . . 
    . . . . f f 2 2 f 9 9 f . . . . 
    . . . f 9 f 2 2 f 9 9 f . . . . 
    . . . f 9 f f 2 2 f f f f . . . 
    . . . f 9 9 f f f 9 9 9 9 f . . 
    . . f f f f f f f f f f f f . . 
    `)
anim = animation.createAnimation(ActionKind.Idle, 200)
animation.attachAnimation(mySprite, anim)
anim.addAnimationFrame(img`
    . . . . . f f f f f . . . . . . 
    . . . . f 2 9 9 2 2 f . . . . . 
    . . . f f 2 f f 2 2 2 f f . . . 
    . . f 9 f f 9 9 9 9 2 f 9 f . . 
    . . f 9 f 9 f f f f 9 f 9 f . . 
    . . f 9 f f f f f f f f 9 f . . 
    . . f 2 2 f f f f f f 2 2 f . . 
    . . . f 9 9 f 9 9 f 9 9 f . . . 
    . . . f 2 9 f 9 9 f 9 2 f . . . 
    . . f 2 f 2 9 9 9 9 2 f 2 f . . 
    . f 9 2 f f f f f f f f 2 f . . 
    . f 9 f f 2 2 2 2 f 9 9 2 f . . 
    . . f f 2 9 9 9 9 f 9 9 f . . . 
    . . . f f f f 2 2 2 f f . . . . 
    . . f f 2 9 9 f f f f f f . . . 
    . . . f f f f f f f f f . . . . 
    `)
scene.cameraFollowSprite(mySprite)
donut_qty = 0
draw_map()
info.setLife(1)
