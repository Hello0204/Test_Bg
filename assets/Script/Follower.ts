const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        cc.tween(this.node)
            .repeatForever(
                cc.tween()
                    .to(1, { x: Math.random() * (100) })
                    .to(1, { x: -80 + Math.random() * (100) })
            )
            .start()
    }

}