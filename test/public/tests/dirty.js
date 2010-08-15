module("MooModel.base");

var Story = new Class({
  Extends: MooModel.Base
});

test("setting attribute should result in change", function(){
  foo = new Story({ name: 'ducktales', title: 'What the duck!' });
  ok(!foo.has_changed());
  foo.set('title', 'Freaking dotherducker!');
  ok(foo.has_changed());
  same(foo.changed(), ["title"]);
});

test("setting attribute to same value should not result in change", function(){
  foo = new Story({ name: 'ducktales', title: 'What the duck!' });
  foo.set('title', 'What the duck!');
  ok(!foo.has_changed());
});

test("should reset has_changed status after saving", function(){
  foo = new Story({ name: 'ducktales', title: 'What the duck!' });
  foo.set('title', 'Freaking dotherducker!');
  ok(foo.has_changed());
  foo.save();
  ok(!foo.has_changed());
});

test("should preserve previous changes", function(){
  foo = new Story({ name: 'ducktales' });
  foo.set('name', 'duck eggs');
  same(foo.attribute_changes(), new Hash({ name: ["ducktales", "duck eggs"]}));
  same(foo.attribute_changes("name"), ["ducktales", "duck eggs"]);
});

test("reset attributes", function(){
  foo = new Story({ name: 'ducktales' });
  foo.set('name', 'duck eggs');
  same(foo.attribute_changes("name"), ["ducktales", "duck eggs"]);
  // foo.reset();
  // same(foo.get('name'), "ducktales");
});
