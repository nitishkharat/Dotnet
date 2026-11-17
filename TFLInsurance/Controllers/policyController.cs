
using Microsoft.AspNetCore.Mvc;
using TFLInsurance.DTOs.Request;
using TFLInsurance.Interfaces;

namespace TFLInsurance.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PolicyController : ControllerBase
    {
        private readonly IPolicyService _service;

        public PolicyController(IPolicyService service)
        {
            _service = service;
        }

        // GET: api/Policy
        [HttpGet]
        public async Task<IActionResult> GetAllPolicies()
        {
            var policies = await _service.GetAllPolicies();

            return Ok(policies);
        }

        // GET: api/Policy/1
        [HttpGet("{policyId}")]
        public async Task<IActionResult> GetPolicyById(long policyId)
        {
            var policy = await _service.GetPolicyById(policyId);

            if (policy == null)
            {
                return NotFound("Policy not found");
            }

            return Ok(policy);
        }

        // POST: api/Policy
        [HttpPost]
        public async Task<IActionResult> AddPolicy(CreatePolicyRequest request)

        {
            long policyId = await _service.AddPolicy(request);

            return Ok(new
            {
                message = "Policy created successfully",
                policyId = policyId
            });
        }

        // PUT: api/Policy/1
        [HttpPut("{policyId}")]
        public async Task<IActionResult> UpdatePolicy(
            long policyId, UpdatePolicyRequest request)
        {
            bool result = await _service.UpdatePolicy(policyId, request);

            if (!result)
            {
                return NotFound("Policy not found");
            }

            return Ok("Policy updated successfully");
        }

        // DELETE: api/Policy/1
        [HttpDelete("{policyId}")]
        public async Task<IActionResult> DeletePolicy(long policyId)
        {
            bool result = await _service.DeletePolicy(policyId);

            if (!result)
            {
                return NotFound("Policy not found");
            }

            return Ok("Policy deleted successfully");
        }
    }
}
