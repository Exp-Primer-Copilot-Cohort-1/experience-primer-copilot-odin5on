function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'templates/skills-member.html',
    controller: 'SkillsMemberController',
    bindtoController: true,
    scope: {
      member: '='
    }
  };
}