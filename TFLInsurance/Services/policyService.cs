
using TFLInsurance.DTOs.Request;
using TFLInsurance.Interfaces;
using TFLInsurance.Models;

namespace TFLInsurance.Services
{
    public class PolicyService : IPolicyService
    {
        private readonly IPolicyRepository _repository;

        public PolicyService(IPolicyRepository repository)
        {
            _repository = repository;
        }

        // Get all policies
        public async Task<List<Policy>> GetAllPolicies()
        {
            return await _repository.GetAllPolicies();
        }

        // Get policy by ID
        public async Task<Policy?> GetPolicyById(long policyId)
        {
            return await _repository.GetPolicyById(policyId);
        }

        // Add new policy
        public async Task<long> AddPolicy(CreatePolicyRequest request)
        {
            Policy policy = new Policy
            {
                policy_number = request.PolicyNumber,
                proposal_id = request.ProposalId,
                customer_id = request.CustomerId,
                product_id = request.ProductId,
                agent_id = request.AgentId,
                sum_assured = request.SumAssured,
                premium_amount = request.PremiumAmount,
                premium_frequency = request.PremiumFrequency,
                start_date = request.StartDate,
                maturity_date = request.MaturityDate,
                status = request.Status
            };

            return await _repository.AddPolicy(policy);
        }

        // Update policy
        public async Task<bool> UpdatePolicy(long policyId, UpdatePolicyRequest request)
        {
            Policy policy = new Policy
            {
                policy_id = policyId,
                policy_number = request.PolicyNumber,
                proposal_id = request.ProposalId,
                customer_id = request.CustomerId,
                product_id = request.ProductId,
                agent_id = request.AgentId,
                sum_assured = request.SumAssured,
                premium_amount = request.PremiumAmount,
                premium_frequency = request.PremiumFrequency,
                start_date = request.StartDate,
                maturity_date = request.MaturityDate,
                status = request.Status
            };

            return await _repository.UpdatePolicy(policy);
        }

        // Delete policy
        public async Task<bool> DeletePolicy(long policyId)
        {
            return await _repository.DeletePolicy(policyId);
        }
    }
}
