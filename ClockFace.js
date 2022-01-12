;(function () {
  let Saturations  = [0.8,1.0,1.0,1.0,1.0,1.0,1.0,0.9,0.7,0.7,0.9,0.9];
  let Brightnesses = [1.0,0.9,0.6,0.6,0.8,0.8,0.7,1.0,1.0,1.0,1.0,1.0,];

  exports.draw = function draw (Settings, CenterX, CenterY, outerRadius) {
    let sin = Math.sin, cos = Math.cos;
    let twoPi = 2*Math.PI;

    let dark = g.theme.dark;

    let withDots = Settings.withDots;
    if (withDots) {
      outerRadius -= 4;

      for (let i = 0; i < 60; i++) {
        let Phi = i * twoPi/60;

        let x = CenterX + outerRadius * sin(Phi);
        let y = CenterY - outerRadius * cos(Phi);

        let j = Math.floor(i / 5);
        let Saturation = (dark ? Saturations[j] : 1.0);
        let Brightness = (dark ? 1.0 : Brightnesses[j]);

        let Color = E.HSBtoRGB(i/60,Saturation,Brightness, true);
        g.setColor(Color[0]/255,Color[1]/255,Color[2]/255);

        g.fillCircle(x,y, 1);
      }
    }

    g.setFont('Vector', 20);
    g.setFontAlign(0,0);

    let innerRadius = (withDots ? outerRadius * 0.9 : outerRadius) - 10;
    for (let i = 0; i < 12; i++) {
      let Phi = i * twoPi/12;

      let x = CenterX + innerRadius * sin(Phi) + (i >= 10 ? 6 : 2);
      let y = CenterY - innerRadius * cos(Phi) + 2;

      let Saturation = (dark ? Saturations[i] : 1.0);
      let Brightness = (dark ? 1.0 : Brightnesses[i]);

      let Color = E.HSBtoRGB(i/12,Saturation,Brightness, true);
      g.setColor(Color[0]/255,Color[1]/255,Color[2]/255);

      g.drawString(i == 0 ? '12' : '' + i, x,y);
    }
  };
})();
