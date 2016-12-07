console.log('Geladenes Modul:')
console.log('bomberman.js')

define
(['app/logic/bomberman', 'app/model/modelBomb',
    'app/model/stage', 'app/model/modelPlayer', 'app/controller/controlKeyboard',
    'app/model/modelwall', 'app/model/modelStart','app/collision/collision'
  ],
  function(bomberman, modelBomb, stage, modelPlayer,  controlKeyboard, modelwall,
           modelStart, collision
  )
  { "use strict";

    return null;
  }
);