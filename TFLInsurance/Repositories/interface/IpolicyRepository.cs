
using TFLInsurance.Models;

namespace TFLInsurance.Interfaces
{
    public interface IPolicyRepository
    {
        Task<List<Policy>> GetAllPolicies();

        Task<Policy?> GetPolicyById(long policyId);

        Task<long> AddPolicy(Policy policy);

        Task<bool> UpdatePolicy(Policy policy);

        Task<bool> DeletePolicy(long policyId);
    }
}
