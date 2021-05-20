const { ccclass, property } = cc._decorator;

@ccclass
export class BGMove extends cc.Component {

    @property(cc.Sprite)
    public spBg: cc.Sprite[] = [null, null, null];

    @property
    speed: number = 0;

    dem: number = 0;

    @property(cc.Node)
    public leftButton: cc.Node = null;
    @property(cc.Node)
    public rightButton: cc.Node = null;

    @property(cc.Node)
    public Car: cc.Node = null;

    @property(cc.Node)
    public FoCar: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    start() {
        this.leftButton.active = false;
        this.rightButton.active = false;
        this.moveBg();
    }

    moveBg() {
        // Vòng lặp bg
        for (let i = 0; i < this.spBg.length - 1; i++) {
            cc.tween(this.spBg[i].node)
                .repeatForever(
                    cc.tween()
                        .by(0.05, { y: -50 })
                        .call(() => {
                            cc.log('bg' + i + ' ' + this.spBg[i].node.y)
                            if (this.spBg[i].node.y <= -700) {
                                this.spBg[i].node.y = 700
                            }
                        })
                )
                .start()
        }
        // Ngã tư
        cc.tween(this.spBg[2].node)
            .delay(10)
            .repeatForever(
                cc.tween(this.spBg[2].node)
                    .by(0.05, { y: -50 })
                    .call(() => {
                        // // Check tọa độ
                        // cc.log('bg2 ' + this.spBg[2].node.y)

                        if (this.spBg[2].node.y <= 80) {
                            cc.log('bg2_1 ' + this.spBg[2].node.y)
                            cc.tween(this.Car)
                                .repeatForever(
                                    cc.tween()
                                        .by(0.05, { y: -20 })
                                )
                                .start()
                                // cc.log('bg2_2 ' + this.spBg[2].node.y)
                                // cc.log('car' + this.Car.y)
                            cc.tween(this.FoCar)
                                .repeatForever(
                                    cc.tween()
                                        .by(0.05, { y: -20 })
                                )
                                .start()
                        }

                        if (this.spBg[2].node.y <= -140) {
                            // Hiện button
                            this.leftButton.active = true;
                            this.rightButton.active = true;

                            // Dừng xe
                            cc.Tween.stopAllByTarget(this.Car)
                            cc.Tween.stopAllByTarget(this.FoCar)
                            // Dừng Bg
                            for (let i = 0; i < this.spBg.length; i++) {
                                cc.Tween.stopAllByTarget(this.spBg[i].node)
                            }
                        }
                    })
            )
            .start()
    }

    update(dt: number) {
        // Move bg dùng hàm update
        // if (this.spBg[2].node.y == 60) {
        //     this.leftButton.active = true;
        //     this.rightButton.active = true;
        //     return;
        // }
        // if (this.dem >= 1000) {
        //     this.spBg[2].node.y -= this.speed;
        // }

        // if (this.dem < 1300) {
        //     for (let i = 0; i < 2; i++) {
        //         this.spBg[i].node.y -= this.speed;
        //         this.dem++;
        //         if (this.spBg[i].node.y <= -640) {
        //             this.spBg[i].node.y = 640;
        //         }
        //     }
        // }
    }

}