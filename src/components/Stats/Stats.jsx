import React from "react";

const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">
        <em>Go pacingList🚀</em>
      </p>
    );

  const numItems = items.length;
  const numLength = items.filter((num) => num.packed).length;
  const percentsTag = Math.round((numLength / numItems) * 100);

  return (
    <div className="stats">
      <footer>
        <em>
          {percentsTag === 100
            ? "Go to planet ✈"
            : `💼 You have ${numItems} items on your list, and you already packed
          ${numLength}(${percentsTag}%)`}
        </em>
      </footer>
    </div>
  );
};

export default Stats;
