import React, { useState } from 'react';

function Checkbox() {
  const [checked, setChecked] = useState(false);

  return (
    <label>
      Seen it?
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      </label>
  );
}

export default Checkbox;