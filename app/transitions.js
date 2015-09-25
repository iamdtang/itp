export default function() {
  this.transition(
    this.fromRoute('courses'),
    this.toRoute('courses.course'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  // this.transition(
  //   this.toRoute('jobs'),
  //   this.use('toLeft'),
  //   this.reverse('toRight')
  // );
  //
  // this.transition(
  //   this.toRoute('notes'),
  //   this.use('toLeft'),
  //   this.reverse('toRight')
  // );
  //
  // this.transition(
  //   this.toRoute('assignment'),
  //   this.use('toLeft'),
  //   this.reverse('toRight')
  // );
}
