using Microsoft.AspNetCore.Mvc;
using TFLInsurance.DTOs.Request;
using TFLInsurance.Interfaces;

namespace TFLInsurance.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AgentsController : ControllerBase
    {
        private readonly IAgentsService _service;

        public AgentsController(IAgentsService service)
        {
            _service = service;
        }

        // GET: api/Agents
        [HttpGet]
        public async Task<IActionResult> GetAllAgents()
        {
            var agents = await _service.GetAllAgents();

            return Ok(agents);
        }

        // GET: api/Agents/1
        [HttpGet("{agent_id}")]
        public async Task<IActionResult> GetAgentById(long agent_id)
        {
            var agent = await _service.GetAgentById(agent_id);

            if (agent == null)
                return NotFound("Agent not found");

            return Ok(agent);
        }

        // POST: api/Agents
        [HttpPost]
        public async Task<IActionResult> AddAgent(CreateAgentRequest request)
        {
            long agent_id = await _service.AddAgent(request);

            return Ok(new
            {
                message = "Agent created successfully",
                agent_id = agent_id
            });
        }

        // PUT: api/Agents/1
        [HttpPut("{agent_id}")]
        public async Task<IActionResult> UpdateAgent(
            long agent_id, UpdateAgentRequest request)
        {
            bool result = await _service.UpdateAgent(agent_id, request);

            if (!result)
                return NotFound("Agent not found");

            return Ok("Agent updated successfully");
        }

        // DELETE: api/Agents/1
        [HttpDelete("{agent_id}")]
        public async Task<IActionResult> DeleteAgent(long agent_id)
        {
            bool result = await _service.DeleteAgent(agent_id);

            if (!result)
                return NotFound("Agent not found");

            return Ok("Agent deleted successfully");
        }
    }
}