
using TFLInsurance.DTOs.Request;
using TFLInsurance.Models;

namespace TFLInsurance.Interfaces
{
    public interface IPolicyService
    {
        Task<List<Policy>> GetAllPolicies();

        Task<Policy?> GetPolicyById(long policyId);

        Task<long> AddPolicy(CreatePolicyRequest request);

        Task<bool> UpdatePolicy(long policyId, UpdatePolicyRequest request);

        Task<bool> DeletePolicy(long policyId);
    }
}
