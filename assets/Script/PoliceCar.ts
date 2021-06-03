const { ccclass, property } = cc._decorator;
import { BGMove } from './BGMove';

@ccclass
export class PoliceCar extends cc.Component {

    onLoad() {

    }

    start() {
        // this.doLeftAnimation();
        // this.doRightAnimation();   
    }
    // Rẽ trái
    doLeftAnimation() {
        let t = cc.tween;
        t(this.node)
            .to(1.5, { y: 50 })
            .parallel(
                // t().to(1, {y: 50}),
                t().to(1.5, { angle: 90 }),
                t().to(1.5, { position: cc.v3(-175, 170) }),
            )
            .to(3, { x: -525 })
            .to(1, { angle: 0 })
            .call(() => {
                this.node.setPosition(0, -180);
            })
            .start()
    }

    // Rẽ phải
    doRightAnimation() {
        let t = cc.tween;
        t(this.node)
            .to(1, { y: 0 })
            .parallel(
                t().to(1, { angle: -90 }),
                t().to(1, { position: cc.v3(50, 50) }),
            )
            .to(3, { x: 540 })
            .to(1, { angle: 0 })
            .call(() => {
                this.node.setPosition(0, -180);
            })
            .start()
    }


    update(dt: number) {
    }
}
