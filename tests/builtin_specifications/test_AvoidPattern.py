"""Example of use of the AvoidPAttern specification"""

from dnachisel import DnaOptimizationProblem, random_dna_sequence, AvoidPattern

def test_basics():
    problem = DnaOptimizationProblem(
        sequence=random_dna_sequence(10000, seed=123),
        constraints=[AvoidPattern(enzyme="BsaI")]
    )
    assert not problem.all_constraints_pass()
    problem.resolve_constraints(final_check=False)
    assert problem.all_constraints_pass()