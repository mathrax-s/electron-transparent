// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const s = (p) => {

	p.setup = () => {
		p.createCanvas(600, 600);
		p.noStroke();
	}

	p.draw = () => {
		p.clear();
		for (let i = 0; i < 6; i++) {
			p.fill(30 * i, 255 - 30 * i, 200, 100);
			p.ellipse(p.width / 2 + p.param(500 * i, 5000) * 200, 50 + 100 * i, 200, 200);
		}
	}

	//param関数
	//いろいろな計算でゆるやかに動かすところに使っている
	//時間差（ミリ秒）、1周する時間（ミリ秒）を渡すと、時間差で位相のずれたサインカーブを返す
	// 「Aquarium」から
	// https://openprocessing.org/sketch/84409/
	p.param = (shift, extent) => {
		let t = (p.millis() + shift) % extent;
		let a = p.map(t, 0, extent, 0, p.TWO_PI);
		return p.sin(a);
	}
}

const app = new p5(s);