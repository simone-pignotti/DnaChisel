"""Example of use of the AvoidChanges as an objective to minimize modifications
of a sequence."""

from dnachisel import AllowPrimer, DnaOptimizationProblem

def test_AllowPrimer():
    problem = DnaOptimizationProblem(
        sequence=40 * "A",
        constraints=[AllowPrimer(tmin=50, tmax=60, max_homology_length=5,
                                 location=(10, 30))])
    problem.resolve_constraints()
    assert problem.all_constraints_pass()
