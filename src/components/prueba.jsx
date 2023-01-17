const sliderItems = data.length > 3 ? 3 : data.length;
const items = [];

for (let i = 0; i < data.length; i += sliderItems) {
  if (i % sliderItems === 0) {
    items.push(
      <Card key={i.toString()}>
        
          {data.slice(i, i + sliderItems).map((da, index) => {
            return <SubCategory key={index.toString()} item={da} />;
          })}
        
      </Card>
    );
  }
}